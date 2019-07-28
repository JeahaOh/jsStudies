// 생성자(Constructor)는 객체를 만드는 역할을 하는 함수다.
// js에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있다.
function Person(){};

var p1 = new Person();
p1.name = "asdf";
p1.introduce = function() {
  return 'My name is ' + this.name;
};

console.log(p1.introduce());

var p2 = new Person();
p2.name = "qwer";
p2.introduce = function() {
  return 'My name is ' + this.name;
};

console.log(p2.introduce());

/**
 * 함수를 호출할 때 new를 붙이면 새로운 객체를 만든 후에 이를 리턴한다.
 * 위의 코드는 새로운 객체를 변수 p1에 담았다.
 * 여러 사람을 위한 객체라면 앞의 예제에서 별로 개선된 것이 없다.
 */