package edu.kh.project.member.model.service;

import edu.kh.project.member.model.vo.Member;

/* Service Interface 사용 이유
 *  (Interface : class 간의 접점)
 * 	1. 프로젝트에 규칙성을 부여하기 위해서
 *    : 모두 동일한 모양을 만들어서 충돌, 에러를 방지하기 위해
 *  2. 클래스간의 결합도를 약화시키기 위함
 *  --> 유지 보수성 향상 (객체지향적 설계)
 *  	하나의 객체를 이용해서 만든 코드가 많을수록 결합도가 높다(수정할 때 많이 고쳐야함 = 유지보수 어려움)
 *  	List<String> list = new ArrayList<String>(); -> 결합도 낮음, 업캐스팅 상태로 부모코드인 list 사용 가능, 폭이 넓음
 *  	ArrayList<String> list = new ArrayList<String>(); -> 결합도가 높음, arraylist만 사용 가능 
 *  3. AOP를 사용하기 위함(관점 지향 프로그래밍, 어디에 들어가도 잘 낄 수 있게 추상적인 형태)
 *  --> spring-proxy를 이용하여 AOP 코드가 동작하는데
 *  	이 spring-proxy는 Service 인터페이스를 상속 받아 동작함
 *  
 */
public interface MemberService {
	
	// 어디서든지 접근 가능한 추상 메서드

	/** 로그인 서비스
	 * @param inputMember(Email / Pw)
	 * @return loginMember
	 */
	public abstract Member login(Member inputMember);
	
}
