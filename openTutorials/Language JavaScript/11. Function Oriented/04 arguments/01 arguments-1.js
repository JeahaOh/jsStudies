var cl = function(){
  console.log(arguments[0]);
}
/**
 * arguments
 * 함수 안에서 인자와 관련된 정보를 갖고있는 객체.
 * 배열과 유사한 면이 있다.
 */

function sum() {
  var i , _sum = 0;
  for( i = 0; i < arguments.length; i++){
    cl( i + ' : '+ arguments[i] + '\n');
    _sum += arguments[i];
  }
  return _sum;
}

cl('result : ' + sum( 1, 2, 3, 4) );
