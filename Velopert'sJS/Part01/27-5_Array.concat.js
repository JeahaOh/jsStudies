const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let concated = arr1.concat( arr2 );

console.log( arr1 );
console.log( arr2 );
console.log( concated );

concated = [...arr1, ...arr2];
console.log( arr1 );
console.log( arr2 );
console.log( concated );

