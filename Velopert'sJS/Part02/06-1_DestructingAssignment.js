const obj = { 
  a : 1,
  b : 2
}

const { a, b = 2 } = obj;
console.log( a );
console.log( b );

const print = function( {a, b} ) {
  console.log( a );
  console.log( b );
}

print( obj );