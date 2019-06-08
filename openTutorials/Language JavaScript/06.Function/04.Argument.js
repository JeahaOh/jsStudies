/**
 * Arguments = 인자, 입력 값
 * 
 */
function get_argument( arg ) { // 매개변수, Parameter
  return arg * 1000;
}

console.log( get_argument( 1 ) ); //  인자, Argument
console.log( get_argument( "ASDF1020" ) );

console.log('===============>')

function get_arguments( arg1, arg2 ) {
  return arg1 + arg2;
}

console.log( get_arguments( 10, 20 ) );
console.log( get_arguments( "ASDF", 1020 ) );