/**
 * 객체와 반복문의 조우
 * 배열은 저장된 데이터들이 순서를 갖고 있음.
 * 객체는 저장된 데이터들이 순서는 없고,
 * key와 value의 쌍으로 저장 되어 있음.
 */

var grades = {
  'Jeaha': 10,
  'IsoL': 20,
  'Sorrowkissed': 5
};

for( key in grades ){
  console.log( "key : " + key + "\n\tvalue : " + grades[key] );
}