package edu.kh.project.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import edu.kh.project.member.model.dao.MemberDAO;
import edu.kh.project.member.model.vo.Member;

// @Service			: bean 등록 시 이름을 클래스명으로 등록(memberServiceImpl)
// @Service("이름") : bean 등록 시 이름을 지정된 이름으로 등록
// Service 레이어, 비즈니스 로직을 가진 클래스임을 명시 + bean 등록하는 어노테이션
@Service
public class MemberServiceImpl implements MemberService {
	
	// MemberDAO bean을 의존성 주입(DI)
	@Autowired	
	private MemberDAO dao;
//	MemberDAO dao = new MemberDAO();
	
	// spring-security.xml에서 등록한 bean을 의존성 주입(DI)
	@Autowired
	private BCryptPasswordEncoder bcrypt;
	
	// 로그인 서비스
	@Override
	public Member login(Member inputMember) {
		
//		System.out.println("입력한 비밀번호 : " + inputMember.getMemberPw());
//		System.out.println("암호화 비밀번호 : " + bcrypt.encode(inputMember.getMemberPw()));
		
		// DAO 코드
		
		// bcrypt 이용 시 로그인 방법
		// 1. 이메일이 일치하는 회원 정보를 DB에서 조회
		//	  반드시 비밀번호(MEMBER_PW)가 포함되어야 함
		
		Member loginMember = dao.login(inputMember.getMemberEmail());
		// 기존에는 트랜잭션 처리를 위해 service에 connection을 생성했지만 AOP로 대체함
		// (commit, rollback 코드 미작성)
		
		// 2. 입력 받은 비밀번호(평문)와 조회한 암호화된 비밀번호(암호문) 비교
		//	--> BCryptPasswordEncoder.matches(평문, 암호문) 이용
		//	--> 같으면 true, 다르면 false
		
		if(loginMember != null) { // 아이디 정상 입력

			if(bcrypt.matches(inputMember.getMemberPw(), loginMember.getMemberPw())) {
				// 3-1. 비밀번호가 일치하면 조회된 회원 정보 반환
				//	    단, 비밀번호는 제거
				loginMember.setMemberPw(null);
				
			} else {
				// 3-2. 비밀번호가 일치하지 않으면 null을 반환 
				loginMember = null;
			}
		}
		return loginMember;
	}
}