const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for( let key in doggy ){
  // console.log( key );
  console.log( `${key} : ${doggy[key]}` );
}

//  TypeError: doggy is not iterable
//  
// for( let a of doggy ) {
//   console.log( a );
// }