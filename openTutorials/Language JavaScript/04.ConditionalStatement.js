if( true ){
  console.log('TRUE');
}

if( false ){
  console.log('FALSE');
}

if( true ){
  console.log(1);
  console.log(2);
  console.log(3);
}
console.log(4);

if( false ){
  console.log(5);
  console.log(6);
}
console.log(7);

if( true ){
  console.log('TRUE');
} else {
  console.log('FALSE');
}

if( false ){
  console.log('FALSE');
} else {
  console.log('TRUE');
}

if(!true && !true){
  console.log(1)
}
if(!false && !true){
  console.log(2)
}
if(!true && !false){
  console.log(3)
}
if(!false && !false){
  console.log(4)
}

if( 0 ) {
  console.log( `0 == TRUE` );
}

if( 1 ) {
  console.log( `1 == TRUE` );
}

console.log( '> false로 간주되는 데이터 형 <')

if( !'') {
  console.log('빈 문자열')
}

if( !undefined ){
  console.log( `undefined` )
}

if( !null ){
  console.log( `!NULL` )
}

// if( !a ){
//   console.log( '값이 할당되지 않은 변수' )
// }
/**
 * Node Console 상에서는 에러남.
 */

if( !NaN ){
  console.log( `NaN` )
}

if( [] ){
  console.log( `[] is ` + typeof([]) + ` and it's true` );
}

if( {} ){
  console.log( `{} is ` + typeof([]) + ` and it's true` );
}

var a = {
  aa : 1
}

if( a = {} ){
  console.log( a.toString() )
}

var b = () => {
  console.log( `b : ` + typeof b)
}

if( typeof b == {} ){
  console.log('b == Object');
}

if( typeof b == 'function' ){
  b()
}

var t = true;

t && b();