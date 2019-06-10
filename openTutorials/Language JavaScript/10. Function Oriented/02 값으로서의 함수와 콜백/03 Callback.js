/**
 * Callback은 어떠한 함수가 수신하는 인자가 함수인 경우를 Callback이라고 함.
 */
var nums = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.sort();
//  [ 1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9 ]
//  숫자의 크기가 아닌 문자로써 중렬함...

var sortFunc = function(a, b){
  console.log( a, b );
  // if( a > b ){
  //   return 1;
  // } else if( a < b ){
  //   return -1;
  // } else {
  //   return 0;
  // }
  //return a - b;
  return b - a;
}
nums.sort(sortFunc);
//  sortFunc는 CallBack 함수가 됨.