const max = function( ... args ) {
  return args.reduce( (acc, current) => {
    if( acc < current ) acc = current;
    return acc;
  }, 0);
}

const result = max( 1, 2, 3, 4, 10, 5, 6, 7 );

console.log( 'result : ' + result );