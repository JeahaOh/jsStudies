const array = [1, 2, 3, 4, 5, 6, 7, 8];

/*
const squared = [];

// for( let i = 0; i < array.length; i++ ) {
//   squared.push( array[i] * array[i] );
// }

array.forEach( n => {
  squared.push( n * n );
});

console.log( squared );
*/

// const square = n => n * n;
// const squared = array.map(square);

const squared = array.map( n => n * n );

console.log( squared );