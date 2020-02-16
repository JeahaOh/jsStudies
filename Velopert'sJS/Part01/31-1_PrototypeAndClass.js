function Anml( type, name, sound ) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    console.log( this. sound );
  }
}

const dog = new Anml( '개', '멍멍이', '멍멍' );
const cat = new Anml( '고양이', '야옹이', '냐옹' );;

dog.say();
cat.say();