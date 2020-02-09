/**
 * ES6에서 추가된 문법.
 * IE에선 지원하지 않는다는 뜻.
 */
const hello = function(name) {
  // `을 사용해야 함.
  return `Hello, ${name}!`;
}

const result = hello('ASDF');
console.log( result );