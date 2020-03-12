console.log( '-'.repeat( 10 ) + ' var ' + '-'.repeat( 10 ))
var value = 'hello';

function myFunc() {
  var value = 'bye';
  if( true ) {
    var value = 'world';
    console.log( 'block scope : ' + value );
  }
  console.log( 'function scop : ' + value );
}

myFunc();

console.log( 'global scope : ' + value );
