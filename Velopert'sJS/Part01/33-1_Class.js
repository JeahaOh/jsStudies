class Anml {
  constructor( type, name, sound ) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }

  say() {
    console.log( this.sound );
  }
}
console.log( Anml.prototype.say );

const dog = new Anml( '개', '멍멍이', '멍멍' );
const cat = new Anml( '고양이', '야용이', '야옹' );

dog.say();
cat.say();