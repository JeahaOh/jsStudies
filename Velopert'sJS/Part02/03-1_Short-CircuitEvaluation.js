//## 03 단축 평가 논리 계산법
//  특정 조건이 만족하는 어떤 함수를 실행하는 상황에서 사용할 수 있음.
//  
true  && true   // true
true  && false  // false
true  || false  // false
false || true   // true

!3

const dog = {
  name : '멍멍이'
}

function getName( animal ) {
  if( animal ) {
    return animal.name;
  }
  return undefined;
}

console.log( getName( dog ) );
console.log( getName(  ) );

function getNameShort( animal ) {
  return animal && animal.name;
}
console.log( getNameShort( dog ) );
console.log( getNameShort(  ) );

console.log( '-'.repeat(20) );

console.log( true  && 'hello' );
console.log( false && 'hello' );
console.log( 'hello' && 'bye');
console.log( null && 'hello');
console.log( undefined && 'hello');
console.log( '' && 'hello');
console.log( 0 && 'hello');
console.log( 1 && 'hello');

