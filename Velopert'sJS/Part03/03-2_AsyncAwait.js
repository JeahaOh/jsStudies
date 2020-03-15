function sleep ( ms ) { 
  return new Promise( resolve => {
    setTimeout( resolve, ms );
  });
};

async function trblMaker() {
  await sleep( 1000 );
  const err = new Error();
  throw err;
}

async function progress() {
  try {
    await trblMaker();
  } catch ( err ) {
    console.error( err );
    return false;
  }
}

progress().then( value => {
  console.log( value );
});