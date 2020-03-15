const myProm = new Promise ( (resolve, reject) => {
  setTimeout( () => {
    // resolve( 'result' );
    reject( new Error() );
  }, 1000);
});

myProm.then( result => {
  console.log( result );
}).catch( e => {
  console.log( e );
})