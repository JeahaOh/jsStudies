const sum = function( ... args ) {
  return args.reduce( (acc, current) => acc + current, 0 );
}

console.log( sum( 1, 2, 3, 4, 5, 6, 7) );