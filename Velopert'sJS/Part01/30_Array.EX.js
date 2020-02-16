function byFilter( nums ) {
  /* TO DO */
  // nums = nums.filter( num => num > 10 );
  // console.log( nums );
  return nums.filter( num => num > 10 ).length;
}

function byForEach( nums ) {
  let cnt = 0;
  nums.forEach( n => {
    if( n > 10 ) {
      cnt++;
    }
  });
  return cnt;
}

function byReduce( nums ) {
  return nums.reduce( (acc, cur) => {
    if( cur > 10 ) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

const cnt = byFilter( [1, 2, 3, 4, 10, 20, 30, 40, 50, 60] );
console.log( cnt );