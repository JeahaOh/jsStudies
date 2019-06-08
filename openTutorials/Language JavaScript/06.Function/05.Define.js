/**
 * 함수를 정의하는 다른 방법
 */

function numbering() {
  let i = 0;
  while( i < 10 ) {
    console.log(i);
    i++
  }
}

numbering = function() {
  let i = 0;
  while( i < 10 ) {
    console.log(i);
    i++;
  }
}

//  익명 함수 : 정의와 동시에 호출하는 함수. 1회성 함수.
(function (){
  let i = 0;
  while( i < 10 ) {
    console.log(i);
    i++;
  }
})();