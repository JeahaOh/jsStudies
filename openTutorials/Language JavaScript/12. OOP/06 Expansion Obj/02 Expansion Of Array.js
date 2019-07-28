Array.prototype.rand = function(){
  var index = Math.floor(this.length * Math.random());
  return this[index];
}

var arr = new Array('Seoul', 'Berlin', 'Oslo', 'Helsinki', 'Stockholem', 'Prague');

console.log(arr.rand());