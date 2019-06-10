/**
 * String과 정규 표현식
 * String.match() exec와 비슷함.
 */

var pattern = /a/;

var str = 'asdf';

str.match(pattern);  //  [ 'a', index: 0, input: 'asdf', groups: undefined ]

str = 'sdf';

str.match(pattern);   //  null

/**
 * String.replace()
 * 문자열에서 패턴은 검색애서 이를 변경한 후에 변경된 값을 리턴한다.
 */

str = 'asdf';

str.replace(pattern, 'A');  //  Asdf