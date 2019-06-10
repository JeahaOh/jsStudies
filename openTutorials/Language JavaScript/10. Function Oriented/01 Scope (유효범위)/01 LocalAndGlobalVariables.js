/**
 * 유효범위(Scope)는 변수의 수명을 의미함.
 */

var vscope = 'global';
function fscope(){
    alert(vscope);
}
fscope();   //  global

/**
 * 함수 밖에서 변수를 선언하면 그 변수는 전역 변수가 된다.
 * 전역 변수는 application 전역에서 접근이 가능한 변수다.
 * 다시 말해 어떤 함수안에서도 그 변수에 접근 할 수 있다.
 * 그렇기 때문에 함수 fscope 내에서 vscope를 호출 했을 때, 함수 밖에서 선언된 vscope의 값 global이 반환된 것이다.
 */

var vscope = 'global';

function fscope() {
  vscope = 'local';
  console.log( '함수 안 : ' + vscope );
}

fscope();     //  local
console.log( '함수 밖 : ' + vscope );   //  local

/**
 * 함수 안에서 var를 쓰지 않았기 때문에, vscope가 전역 변수화 됨.
 * 안, 밖에서 local을 출력.
 * var를 쓰는것과 안쓰는 것의 차이임.
 * 
 * 변수를 선언할 때 var를 붙이는 것을 습관화 해야한다.
 */