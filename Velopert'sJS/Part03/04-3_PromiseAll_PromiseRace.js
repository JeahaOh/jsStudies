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
  const [dog, rbby, ttl] = await Promise.race([getDog(), getRabby(), getTtl()]);

  console.log( dog );
  console.log( rbby );
  console.log( ttl );
}

progress();