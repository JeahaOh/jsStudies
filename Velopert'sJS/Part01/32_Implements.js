function Anml( type, name, sound ) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}
Anml.prototype.say = function() {
  console.log( this.sound );
}
Anml.prototype.glob = '털복숭이 친구들';

function Dog( name, sound ) {
  Anml.call( this, '개', name, sound );
}
Dog.prototype = Anml.prototype;

function Cat( name, sound ) {
  Anml.call( this, '고양이', name, sound );
}
Cat.prototype = Anml.prototype;


const dog = new Dog( '멍멍이', '멍멍' );
const cat = new Cat( '야옹이', '냐옹' );;

dog.say();
cat.say();

console.log( dog.glob );
console.log( cat.glob );