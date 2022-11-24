package edu.kh.project.board.model.exception;

// 사용자 정의 예외
// - 자바에서 제공하지 않는 예외가 필요할 경우 만드는 예외 클래스
// - 작성법 : 원하는 예외를 하나 상속 받고, 생성자만 구현
// Exception, IOException == checked exception : 반드시 예외처리 해줘야하는 것들
// RuntimeException == unchecked exception : 꼭 예외처리 할 필요 X
public class BoardUpdateException extends RuntimeException{
	
	public BoardUpdateException() {
		super("게시글 수정 예외");  // 부모 생성자
	}

	public BoardUpdateException(String message) {
		super(message);  // 부모 생성자
	}
	
	
	
}
