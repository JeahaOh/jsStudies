const sum = function( ... rest ) {
  return rest.reduce( (acc, current) => acc + current, 0 );
}

console.log( sum( 1, 2, 3, 4, 5, 6, 7) );

const nums = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log( sum( ... nums ) );