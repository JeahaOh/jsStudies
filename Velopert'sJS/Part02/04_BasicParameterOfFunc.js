// function calCircleArea( r ) {
//   const radius = r || 1
//   return Math.PI * radius * radius;
// }


//  ES 6
// function calCircleArea( r = 1 ) {
//   return Math.PI * r * r;
// }

const calCircleArea = ( r = 1 ) =>  Math.PI * r * r;

console.log( calCircleArea( 4 ) );
console.log( calCircleArea(  ) );