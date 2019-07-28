//  함수를 호출했을 때와 new를 이용해 생성자를 호출했을 때의 차이
var func = null;

function Func() {
  func = this;
}

var obj1 = Func();
var obj2 = new Func();

if( func === glabal ){
  console.log('global \n');
}

if( func === obj2 ){
  console.log('obj2 \n');
}

//  global
//  obj2

/**
 * 생성자는 빈 객체를 만든다.
 * 그리고 이 객체내에서 this는 만들어진 객체를 가르킨다.
 * 생성자가 실행되기 전까지는 객체는 변수에도 할당될 수 없기 때문에
 * this가 아니면 객체에 대한 어떤 작업도 할 수 없다.
 */

function Func(){
  console.log(obj);
}

var obj = new Func();
