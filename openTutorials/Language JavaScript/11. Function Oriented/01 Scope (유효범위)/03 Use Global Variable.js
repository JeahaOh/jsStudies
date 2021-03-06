/**
 * 불가피하게 전역 변수를 사용해야 하는 경우,
 * 하나의 객체를 전역 변수로 만들고, 객체의 속성으로 변수를 관리하는 방법을 사용한다.
 */

MYAPP = {};

MYAPP.calculator = {
  'left' : null ,
  'right' : null
}


MYAPP.coordinate = {
  'left' : null,
  'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

console.log( sum() );

/**
 * 전역 변수를 사용하고 싶지 않다면,
 * 아래와 같이 익명 함수를 호출하는 방법을 사용한다.
 */

(function() {
  var MYAPP = {};
  MYAPP.calculator = {
    'left' : null,
    'right' : null
  }
  MYAPP.coordinate = {
    'left' : null,
    'right' : null
  }

  MYAPP.calculator.left = 10;
  MYAPP.calculator.right = 20;

  function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
  }
  console.log( sum() );
}())

/**
 * 위와 같은 방법법은 JS에서 로직을 모듈화 하는 일반적인 방법이다.
 */