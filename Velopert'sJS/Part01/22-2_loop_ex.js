function biggerThanThree( nums ) {
  /* TO-DO */
  let result = [];
  for( i of nums ) {
    console.log( i );
    if( i >= 3 ) result.push( i );
  }
  return result;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log( biggerThanThree(nums) );

