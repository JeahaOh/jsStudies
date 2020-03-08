//  배열 비구조화 할당
const arr = [ 1, 2, ];

const one = arr[0];
const two = arr[1];

console.log( one );
console.log( two );

console.log( '-'.repeat( 20 ) );

const [onee, twoo, three = 3] = arr;

console.log( onee );
console.log( twoo );
console.log( three );