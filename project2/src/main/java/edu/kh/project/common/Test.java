package edu.kh.project.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Test {
	
	public static void main(String[] args) throws ParseException {
		
		// Date : 날짜용 객체
		// Calender : Date 업그레이드 객체
		// SimpleDateFormat : 날짜를 원하는 형태의 문자열로 변환
		
		// 오늘 23시 59분 59초 까지 남은 시간을 초단위로 구하기
		
		Date a = new Date(); // 현재 시간
		Date b = new Date(1669132399503L);
		
		// 기준시간 : 1970년 1월 1일 09시 0분 0초
		// new Date(ms) : 기준시간 + ms 만큼 지난 시간
		
		Calendar cal = Calendar.getInstance(); 
		// 1669045845179 : 기준시간에서 현재시간까지 몇 ms가 지났는지
//		cal.add(단위(년,월,일,시,분,초), 추가할 값);
		cal.add(cal.DATE, 1);
		
		// SimpleDateFormat을 이용해서 cal 날짜 중 시,분,초를 0:0:0 바꿈
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date temp = new Date(cal.getTimeInMillis());
		// 하루 증가한 내일 날짜의 ms 값을 이용해서 Date 객체 생성
		
//		System.out.println(sdf.format(temp));
		Date c = sdf.parse(sdf.format(temp));
				// 날짜 형식 String -> Date로 변환
		
		System.out.println(a); 
//		 Tue Nov 22 00:46:45 KST 2022
		System.out.println(temp);
		System.out.println(c);
		
		System.out.println(b);
		// Thu Jan 01 09:00:00 KST 1970 : 기준 시간
		System.out.println(cal);

		// 내일 자정 ms - 현재시간 ms
		long diff = c.getTime() - a.getTime();
		System.out.println((diff)/1000); // 23:59:59초까지 남은 시간(s)
		
	}
}
