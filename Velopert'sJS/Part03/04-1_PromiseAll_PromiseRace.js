function sleep ( ms ) { 
  return new Promise( resolve => {
    setTimeout( resolve, ms );
  });
};

const getDog = async () => {
  await sleep( 1000 );
  return 'Doggy';
}

const getRabby = async () => {
  await sleep( 500 );
  return 'Rabby';
}

const getTtl = async () => {
  await sleep( 3000 );
  return 'Turtle';
}

async function progress() {
  const dog = await getDog();
  console.log( dog );
  
  const rabbit = await getRabby();
  console.log( rabbit );

  const turtle = await getTtl();
  console.log( turtle );

  const start = Date.now();

  
  const animals = await Promise.all([getDog(), getRabby(), getTtl()]);
  console.log( Date.now() - start );
  console.log( animals );
}

progress();