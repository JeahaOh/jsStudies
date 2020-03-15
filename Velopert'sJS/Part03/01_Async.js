function work( callback ) {
  
  setTimeout( () => {
    const start = Date.now();
    for ( let i = 0; i < 1000000000; i++ ) { }

    const end = Date.now();
    console.log( end - start + 'ms' );
    callback( end - start );
  }, 0);
  
}

console.log( 'Progress Start!')
work( (ms) => {
  console.log( 'Waste ' + ms + 'ms');
});
console.log( 'Next Work!')