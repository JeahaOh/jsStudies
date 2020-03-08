const animal = {
  name : '멍멍이',
  type : 'dog'
}

const nickname1 = animal.name;

console.log( nickname1 );

const { name : nickname2 } = animal;

console.log( nickname2 );

//  비구조화 할당을 하면 기존의 값이 변하진 않는다.
console.log( animal );