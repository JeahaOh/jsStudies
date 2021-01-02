function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

async function progress() {
  console.log('hihi');
  await sleep(1000);
  console.log('hell hell');
  return true;
}

progress().then(value => {
  console.log(value);
});