package edu.kh.project.member.model.service;

import java.util.Map;

import edu.kh.project.member.model.vo.Member;

// 설계적 + 유지보수 + AOP
public interface MyPageService {
		
	/** 회원 정보 수정 서비스
	 * @param inputMember
	 * @return result
	 */
	public abstract int updateInfo(Member inputMember);
	//interface는 public abstract를 묵시적으로 가지고 있음(안써도 ok)

	/** 비밀번호 변경 서비스
	 * @param paramMap
	 * @return result
	 */
	public abstract int changePw(Map<String, Object> paramMap);

	/** 회원탈퇴 서비스
	 * @param memberNo
	 * @param memberPw
	 * @return result
	 */
	public abstract int memberDelete(int memberNo, String memberPw);
	
}
