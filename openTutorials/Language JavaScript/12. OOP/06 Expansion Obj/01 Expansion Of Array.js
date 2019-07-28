var arr = new Array('Seoul', 'Berlin', 'Oslo', 'Helsinki', 'Stockholem', 'Prague');
function getRandomValFromArr(tgt){
  var index = Math.floor(tgt.length * Math.random());
  return tgt[index];
}

console.log(getRandomValFromArr(arr));