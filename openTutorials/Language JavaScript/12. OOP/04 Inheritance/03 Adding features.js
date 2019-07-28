function Person(name) {
  this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
  return 'My name is ' + this.name;
}

function Programmer(name) {
  this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
  return 'hell world';
}

var p = new Programmer('ASDF');

console.log( p.introduce() );
console.log( p.coding() );