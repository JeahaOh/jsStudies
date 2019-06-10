/**
 * JS에서는 함수가 선언된 시점에서의 유효 범위를 갖는다.
 * 이러한 유효범위의 방식을 정적 유효범위(Static Scoping) 혹은 렉시컬(Lexical Scoping)이라고 한다.
 */

var i = 5;

function a() {
  var i = 10;
  b();
}

function b() {
  console.log( i );
}

a();  //  5