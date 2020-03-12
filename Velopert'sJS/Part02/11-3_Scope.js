console.log( '-'.repeat( 10 ) + ' const ' + '-'.repeat( 10 ))
const value = 'hello';

function myFunc() {
  const value = 'bye';
  if( true ) {
    const value = 'world';
    console.log( 'block scope : ' + value );
  }
  console.log( 'function scop : ' + value );
}

myFunc();

console.log( 'global scope : ' + value );