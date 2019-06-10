//  함수는 함수의 리턴값으로도 사용할 수 있다.
function cal( mode ){
  var funcs = {
    'plus': function( left, right ){
      return left + right;
    },
    'minus': function( left, right ){
      return left - right;
    }
  }
  return funcs[mode];
}

console.log( cal('plus')(2 , 1) );
console.log( cal('minus')(2 , 1) );

//  배열의 값으로도 사용할 수 있다.
var process = [
  function( input ){
    return input + 10;
  },
  function( input ){
    return input * input;
  },
  function( input ){
    return input/2;
  }
];

var input = 1;
for( var i = 0; i < process.length; i++ ){
  input = process[i]( input );
}

console.log( input );


/**
 * 자바스크립트의 함수,
 * 변수, 매개변수, 리턴값의 용도로 사용할 수 있는 형식의 데이터를
 * First-Class [Citizen, Object, Entity, Value] 라고 부름.
 */