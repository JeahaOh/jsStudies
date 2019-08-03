Object.prototype.contain = function(neddle) {
  for( var name in this ){
    if( this[name] === neddle){
      return true;
    }
  }
  return false;
}

var obj = { 'name' : 'jeje', 'city' : 'seoul'}
console.log(obj.contain('jeje'));

var ovj = [ 'jeje', 'asdf', 'sorrowkissed' ];
console.log(ovj.contain('asdf'));

for( var name in obj ){
  console.log(name);
}

for( var name in obj ){
  if( obj.hasOwnProperty(name) ){
    console.log(name);
  }
}