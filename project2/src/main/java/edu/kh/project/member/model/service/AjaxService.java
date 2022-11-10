package edu.kh.project.member.model.service;

// 서비스 인터페이스 : 설계, 유지보수성 향상, AOP 때문에 생성
public interface AjaxService {

	int emailDupCheck(String memberEmail);
	
}
