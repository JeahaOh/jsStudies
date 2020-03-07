//## 03 단축 평가 논리 계산법
//  || 연산자를 사용하면 이거 없으면 이거 대신 이거 쓸래.
let namelessDog = {
  name: '',
}
let namedDog = {
  name: 'Dot Dot'
}

function getName( animal ) {
  const name = animal && animal && animal.name;
  //if( !name ) return 'No Name';
  //return name;
  return name || 'No Name';
}

console.log( getName( namelessDog ) );
console.log( getName( namedDog ) );


console.log( '-'.repeat(20) );


console.log( false || 'FALSY' );
console.log( '' || 'VACANCY' );
console.log( null || 'NULL' );
console.log( undefined || 'undefined' );
console.log( 0 || 'zero' );

console.log( 1 || '음?');
console.log( true || 'Nobody`s Care.' );
console.log( 'WWOOO' || 'Nobody`s Care.' );
console.log( [] || 'NONO' );
 