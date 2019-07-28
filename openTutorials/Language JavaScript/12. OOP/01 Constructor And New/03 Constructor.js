function Person(name){
  this.name = name;
  this.introduce = function() {
    return 'My name is ' + this.name;
  }
};

var p1 = new Person('asdf');

console.log(p1.introduce());

var p2 = new Person('qwer');

console.log(p2.introduce());

/**
 * 생성자 내에서 이 객체의 속성을 정의하고 있다.
 * 이런 작업을 초기화라고 한다.
 * 이를 통해서 코드의 재사용성을 높인다.
 * 생성자 함수는 일반함수와 구분하기 위해 첫 글자를 대문자로 표시한다.
 * 
 * 일반적인 객체지향 언어에서 생성자는 클래스의 소속이다.
 * 하지만 JS에서 객체를 만드는 주체는 함수이다.
 * 함수에 new를 붙이는 것을 통해서 객체를 만들 수 있다는 점은
 * JS에서 함수의 위상을 암시하는 단서이면서
 * 또 JS가 추구하는 자유로움을 보여주는 사례이다.
 */