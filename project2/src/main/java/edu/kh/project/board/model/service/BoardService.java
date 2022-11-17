package edu.kh.project.board.model.service;

import java.util.List;
import java.util.Map;

public interface BoardService {

	
	/**
	 * @return
	 */
	List<Map<String, Object>> selectBoardType();

	/**
	 * @param boardCode
	 * @param cp
	 * @return
	 */
	Map<String, Object> selectBoardList(int boardCode, int cp);

}
