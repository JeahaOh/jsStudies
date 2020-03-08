const nums = [0, 1, 2, 3, 4, 5, 6];

const [ one, two, ... rest ] = nums;

console.log( one );
console.log( two );
console.log( rest );