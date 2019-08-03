/**
 * 일종의 변수할당이라고 할 수 있는 메소드의 매개변수는 어떻게 동작하는지 살펴보자.
 * 다음은 원시 데이터 타입을 인자로 넘겼을 때의 동작 모습니다.
 */
var a = 1;
function funcP(b) {
  b = 2;
}
funcP(a);
console.log(a);
//  1

//  다음은 참조 데이터 타입을 인자로 넘겼을 때 동작하는 모습이다.
var o = { 'id' : 1 };
function funcO(obj) {
  obj = { 'id' : 2 };
}
funcO(o);
console.log(o.id);
//  1
/**
 * 함수 funcO의 파라미터 obj로 전달된 객체 obj이다.
 * (b=a) b를 새로운 객체로 대체하는 것은
 * (b = {'id':2})가 가르키는 객체를 변경하는 것이기 때문에
 * 객체 o에 영향을 주지 않는다.
 */

var O = { 'id' : 1 };
function funcR(obj) {
  obj.id = 2;
}
funcR(O);
console.log(O.id);
//  2
/**
 * 파라미터 obj는 객체 O의 레퍼런스다.
 * 이 값의 속성을 바꾸면
 * 그 속성이 소속된 객체를 대상으로 수정작업을 한 것이 되기 때문에
 * obj의 변경은 O에도 영향을 미친다.
 */