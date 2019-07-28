/**
 * 객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다.
 * 객체 내의 변수를 프로퍼티(property),
 * 객체 내의 함수를 메소드(method)라고 부른다.
 * 객체를 만들어보자.
 */

var person = {};
person.name = "asdf";
person.introduce = function() {
  return 'My name is ' + this.name;
}

console.log(person.introduce());

//  객체를 만드는 과정이 분산되어 있다.
//  객체를 정의 할 때 값을 셋팅하도록 코드를 바꿔보자.

var person = {
  name : "asdf",
  introduce : function() {
  return 'My name is ' + this.name;
}};

console.log(person.introduce());

/**
 * 만약 다른 사람의 이름을 담을 객체가 필요하다면 객체 정의를 반복해야 한다.
 * 객체의 구조를 재활용할 수 있는 방법을 알아보자.
 */