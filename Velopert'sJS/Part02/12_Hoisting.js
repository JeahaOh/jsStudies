myFunc();

function myFunc() {
  console.log( 'myFunc' );
}

console.log( nums );

var nums = [1, 2];
//  가급적이면 피하라.

function fn() {
  console.log( a );
  var a = 2;
}

fn();

function fn2() {
  console.log( a );
  let a = 2;
}

fn2();