var arr = [];
for( var i = 0; i < 5; i++ ){
  arr[i] = function(){
    return i;
  }
}

for( var idx in arr ){
  console.log( arr[idx]() );
}

var arr = [];
for( var i = 0; i < 5; i++ ){
  arr[i] = function(id){
    return function(){
      return id;
    }
  }(i);
}

for( var idx in arr ){
  console.log( arr[idx]() );
}