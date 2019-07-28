function Person(name) {
  this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
  return 'My name is ' + this.name;
}

var p = new Person('ASDF');

console.log( p.introduce() );

//  결과는 같지만, 상속을 위한 기본적인 준비 방법이다.