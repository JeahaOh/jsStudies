for( let star = 1; star <= 5; star++ ) {
  console.log('*'.repeat(star));
}

for( let star = 5; star >= 1; star-- ) {
  console.log('*'.repeat(star));
}

for( let star = 1; star <= 16; star *=2 ) {
  console.log('*'.repeat(star));
}

for( let star = 5; star >= 1; star-- ) {
  console.log( ' '.repeat( 5 - star) + '*'.repeat(star));
}

for( let star = 9; star >= 1; star-= 2 ) {
  console.log( ' '.repeat(( 9 - star ) / 2 ) + '*'.repeat(star));
}

for( let star = 9; star >= 1; star-= 2 ) {
  console.log( ' '.repeat(( 9 - star ) / 2 ) + '*'.repeat(star));
}

