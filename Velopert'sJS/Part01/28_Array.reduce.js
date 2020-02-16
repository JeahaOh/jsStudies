const nums = [1, 2, 3, 4, 5];

// let sum = 0;
// nums.forEach( n=> {
//   sum += n;
// });

// console.log( sum );

let sum = nums.reduce((accumulator, current) => {
  let result = accumulator + current;
  console.log( `accumulator(${accumulator}) + current(${current}) = ${result}` );
  return result;
}, 0);
console.log( sum );

let avg = nums.reduce((accumulator, currunt, idx, array) => {
  if( idx === array.length - 1) {
    return (accumulator + currunt) / array.length;
  }
  return accumulator + currunt;
}, 0);

console.log( avg );