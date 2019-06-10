/**
 * 옵션
 * 정규표현식 패턴을 만들 때 옵션을 설정할 수 있다.
 * 옵현에 따라 검출되는 데이터가 달라진다.
 *  i
 * i를 붙이면 대소문자를 구분하지 않는다.
 *  g
 * g를 붙이면 검색된 모든 결과를 리턴한다.
 */

var xi = /a/;

console.log(
  'Asdf'.match(xi)
);  //  null

var oi = /a/i;

console.log(
 'Asdf'.match(oi) 
);  //  ["A"];

var xg = /a/;

console.log(
  'asdfasdf'.match(xg)
);  //  [ 'a', index: 0, input: 'asdfasdf', groups: undefined ]

var og = /a/g;
console.log(
  'asdfasdf'.match(og)
);  //  [ 'a', 'a' ]


var ig = /a/ig;

console.log(
  'AasdfAa'.match(ig)
);  //  [ 'A', 'a', 'A', 'a' ]
