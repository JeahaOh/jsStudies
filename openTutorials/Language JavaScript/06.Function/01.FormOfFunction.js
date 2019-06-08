/**
 * Function 함수
 * 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 `재 사용성`을 높여준다.
 * 
 * 함수의 형식은 아래와 같다.
 * function 함수명 ( [인자...[,인자] ] ) {
 *   코드
 *   return 반환값;
 * }
 */

function numbering() {
  i = 0;
  while(i < 10){
    console.log(i);
    i += 1;
  }
}
/**
 * numbering 괄호가 없다면 변수로 인식함.
 * 함수를 호출할 땐 괄호를 붙여줘야 함.
 */
numbering();

function get_name(){
  return 'Jeaha';
}

console.log(get_name());

function get_args(args1 , args2){
  return args1 + args2;
}

console.log( get_args('WHAT ', `the hack`) );