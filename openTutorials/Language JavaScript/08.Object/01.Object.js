/**
 * Object 객체
 * 배열이 아이템에 대한 색인을 숫자로 한다면,
 * 객체는 아이템에 대한 색인으로 문다를 사용한다.
 */

var grades = {
  'Jeaha': 10,
  'Isol': 20,
  'Sorrowkissed': 5
};

console.log( grades );

// var gg = {};
var gg = new Object;

gg['Jeaha'] = 10;
gg['IsoL'] = 20;
gg['Sorrowkissed'] = 5;

console.log( gg['IsoL'] );
console.log( gg.Sorrowkissed );