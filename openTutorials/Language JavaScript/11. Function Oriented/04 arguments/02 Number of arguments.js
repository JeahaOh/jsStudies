/**
 * 매개 변수의 수
 * 매개변수와 관련된 두가지 수가 있음.
 *  함수.length
 *    함수에 정의된 인자의 수.
 *  arguments.length
 *    함수로 전달 된 실제 인의 수.
 */
function zero(){
  console.log(
    'zero.length', zero.length,
    'arguments.length', arguments.length
  );
}
zero();                 //  zero.length 0 arguments.length 0

function one(arg1){
  console.log(
    'one.length', one.length,
    'arguments', arguments.length
  );
}
one( 'val1', 'val2');   //  one.length 1 arguments 2
/**
 * 함수가 정한 매개변수는 1개
 * 실제로 함수를 호출할 때 전달된 인자는 2개를 의미.
 */

function two( arg1, arg2 ){
  console.log(
    'two.length', two.length,
    'arguments.length', arguments.length
  );
}
two( 'val1' );          //  two.length 2 arguments.length 1

/**
 * 함수이름.length와 arguments.length 두개가 다르다면
 * 에러를 발생시키는 등의 방법을 쓸 수 있음.
 */