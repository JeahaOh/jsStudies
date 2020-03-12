const value = 'hello';

function myFunc() {
  console.log( 'myFunc : ' + value );
}

function othrFunc() {
  const value = 'bye';
  console.log( 'othrFunc : ' + value );
}

myFunc();
othrFunc();
console.log( 'global scope : ' + value );