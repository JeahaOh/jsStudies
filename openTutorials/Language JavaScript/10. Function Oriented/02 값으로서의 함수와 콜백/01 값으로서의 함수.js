/**
 * JS에서는 함수도 객체다.
 * 일종의 값이다.
 * 거의 모든 언어가 함수를 가지고 있고, JS의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.
 * 객체 안에 정의 되어 있는 함수를 메소드라고 한다.
 * 함수는 값이기 때문에 다른 함수의 인자로 전당 될 수도 있다.
 */
function a(){}
a = {
  b: function(){
  }
}
function cal( func, num ){
  return func( num );
}
function increase( num ){
  return num + 1;
}
function decrease( num ){
  return num - 1;
}

console.log( cal( increase, 1 ) );
console.log( cal( decrease, 1 ) );
