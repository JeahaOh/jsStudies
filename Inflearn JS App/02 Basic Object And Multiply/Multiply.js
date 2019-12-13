let loop = true;
while( loop ) {

  let x = Math.floor( Math.random() * 9 ) + 1;
  let y = Math.floor( Math.random() * 9 ) + 1;

  let result = x * y;
  let condition = true;

  while( condition ) {
    let answer = prompt( String( x ) + ' X ' + String( y ) + ' = ?' );
    if( answer.length == 0 ) {
      condition = loop = false;
      break;
    }
    if( result === Number( answer ) ) {
      alert( 'Yes It Is.' );
      condition = false;
    } else {
      alert( 'DDANG' );
    }
  }
}