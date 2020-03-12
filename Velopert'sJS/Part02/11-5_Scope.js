console.log( '-'.repeat( 10 ) + ' let ' + '-'.repeat( 10 ))
let value = 'hello';

function myFunc() {
  let value = 'bye';
  if( true ) {
    let value = 'world';
    console.log( 'block scope : ' + value );
  }
  console.log( 'function scope : ' + value );
}

myFunc();

console.log( 'global scope : ' + value );
