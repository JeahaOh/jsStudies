const value = 'hello';

function myFunc() {
  const value = 'bye';
  const anthrValue = 'world';

  function insideFunc () {
    console.log( 'insideFunc : ' );
    console.log( 'value      : ' + value );
    console.log( 'anthrValue : ' + anthrValue );
  }
  
  insideFunc();
}

myFunc();

console.log( 'global scope : ' );
console.log( 'value        : ' + value );
console.log( 'anthrValue   : ' + anthrValue );