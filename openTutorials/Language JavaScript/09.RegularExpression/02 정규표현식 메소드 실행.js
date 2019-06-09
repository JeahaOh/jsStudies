/**
 * 정규 표현식 메소드 실행
 * 정규 표현식으로 할 수 있는 작업.
 * 추출, test, 치환
 */
var pattern = /a/;

console.log( pattern.exec('asdf') );  //  [ 'a', index: 0, input: 'asdf', groups: undefined ]

console.log( pattern.exec('sdfg') );  //  null

var pattern = /a./;

console.log( pattern.exec('asdf') );  //  [ 'as', index: 0, input: 'asdf', groups: undefined ]

console.log( pattern.exec('sdfg') );  //  null

/**
 * exec()
 * 정규 표현식이 찾고자 하는 대상을 첫번째 인자로,
 * 패턴이 찾고자 하는 대상이 있다면 그것을 배열로 리턴.
 */

var pattern = /a/;

pattern.test('asdf');  //  true
pattern.test('sdf');  //  false

/**
 * test()
 * 패턴이 찾고자 하는 대상이
 * 있다면 true
 * 없다면 false
 */