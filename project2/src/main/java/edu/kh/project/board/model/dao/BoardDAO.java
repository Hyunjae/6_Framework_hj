package edu.kh.project.board.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.project.board.model.vo.Board;
import edu.kh.project.board.model.vo.Pagination;

@Repository
public class BoardDAO {
	
	@Autowired  // root-context.xml에서 bean(객체)로 만들어둔 것을 의존성 주입받아 사용함
	private SqlSessionTemplate sqlSession;

	/**
	 * @return
	 */
	public List<Map<String, Object>> selectBoardType() {
		
		return sqlSession.selectList("boardMapper.selectBoardType");
	}

	/** 게시글 수 조회
	 * @param boardCode
	 * @return listCount
	 */
	public int getListCount(int boardCode) {
		
		return sqlSession.selectOne("boardMapper.getListCount", boardCode);
	}

	/** 특정 게시판 목록 조회
	 * @param pagination
	 * @param boardCode
	 * @return boardList
	 */
	public List<Board> selectBoardType(Pagination pagination, int boardCode) {
		
		// RowBounds 객체(마이바티스)
		// - 여러 행 조회 결과 중 특정 위치부터 지정된 행의 개수만 조회하는 객체
		//						(몇 행을 건너 뛸것인가?)
		
		// offset : 얼마만큼 건너 뛸 것인가?
		int offset = (pagination.getCurrentPage() -1) * pagination.getLimit();
		
		// limit : 몇 개를 조회할 것인가? = pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("boardMapper.selectBoardList", boardCode, rowBounds);
											// namespace.id		, 파라미터, RowBounds 객체
											// 파라미터가 없을 경우 null 대입(rowbounds는 항상 3번째 자리)
	}

	/** 게시글 상세 조회 + 이미지 목록 조회 + 댓글 목록 조회
	 * @param boardNo
	 * @return 
	 */
	public Board selectBoardDetail(int boardNo) {
		
		return sqlSession.selectOne("boardMapper.selectBoardDetail", boardNo);
	}
	
}
