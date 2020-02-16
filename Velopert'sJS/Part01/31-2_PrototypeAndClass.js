function Anml( type, name, sound ) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Anml.prototype.say = function() {
  console.log( this.sound );
}

Anml.prototype.glob = '털복숭이 친구들';

const dog = new Anml( '개', '멍멍이', '멍멍' );
const cat = new Anml( '고양이', '야옹이', '냐옹' );;

dog.say();
cat.say();

console.log( dog.glob );
console.log( cat.glob );