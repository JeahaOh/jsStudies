var str = 'coding';
console.log(str.length);
//  6

console.log(str.charAt(0));
//  c

str.prop = 'Everybody';
//  'Everybody'
console.log(str.prop);
//  undefined
/**
 * str.prop 하는 순간에 js 내부적으로 String 객체가 만들어 진다.
 * prop 프로퍼티는 이 객체에 저장되고 이 객체는 곧 제거 된다.
 * 따라서 prop이라는 속성이 저장된 객체는 존재하지 않게 된다.
 * 이런 특징은 일반적인 객체의 동작 방법과 다르다.
 * 
 * 문자열과 관령해서 필요한 기능을 객체지향적으로 제공해야 하는 필요 또한 있기 때문에,
 * 원시 데이터 형을 댇체처럼 다룰 수 있도록 하기 위한 객체를 JS에서 제공하고 있는데,
 * 그것이 래퍼객체(Wrapper Object)이다.
 * 
 * Wrapper Object로는
 * String, Number, Boolean이 있다.
 * null과 undefined는 래퍼객체가 돈대하지 않는다.
 */
