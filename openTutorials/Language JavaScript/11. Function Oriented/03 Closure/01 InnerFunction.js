/**
 * 클로저(Closure)는 내부함수가 외부함수의 맥락(Context)에 접근할 수 있는 것을 가르킨다.
 * 클로저는 JS를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.
 */

function outter1() {
  //  var inner = function(){}와 같음.
  //  함수에서 사용하는 함수를 정의 할 때 사용할 함수 안에서 선언하면 응집성이 높아짐.
  function inner1() {
    var title1 = "ASDF";
    console.log(title);
  }
  inner1();
}
outter1();
/**
 * 위의 예제 코드는 outter의 내부에 inner가 정의 되어 있다.
 * 함수 inner를 내부 함수라고 한다.
 * 내부 함수는 외부함수의 지역변수에 접근 할 수 있다.
 */

function outter2() {
  var title = "QWER";
  function inner2() {
    console.log(title);
  }
  inner2();
}
outter2();