function sumOf( nums ) {
  console.log( nums, nums.length );
  let sum = 0;
  for( let i = 0; i < nums.length; i++ ) {
    sum += nums[i];
  }
  return sum;
}

const result = sumOf( [1, 2, 3, 4, 5, ] );
console.log( result );