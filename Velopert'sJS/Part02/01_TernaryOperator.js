const arr = [1, 2, ];
let text = arr.length === 0 
  ? '비어있는 배열' 
  : '비어있지 않은 배열';

console.log( text );


const condition1 = false;
const condition2 = false;

const value = condition1
  ? 'WOW!'
  : condition2
    ? 'blabla'
    : 'foo';

console.log( value );

// 3항 연산자를 연달아 쓰는건 좋지 않다.