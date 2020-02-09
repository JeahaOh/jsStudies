const ironMan = {
  name : '토니 스타크',
  actor : '로버트 다우니 주니어',
  alias : '아이언맨'
}

const captanAmerica = {
  name : '스티븐 로져스',
  actor : '크리스 에반스',
  alias : '캡틴 아메리카'
}

const print = function( hero ) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}`;
  console.log( text );
}

print( captanAmerica );
print( ironMan );

//  비구조화 할당. 객체 구조 분해
const DA1 = function( hero ) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}`;
  console.log( 'Destructure Assignment.');
  console.log( text );
}

DA1( ironMan );

const DA2 = function( { alias, name, actor } ) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}`;
  console.log( 'Destructure Assignment.');
  console.log( text );
}

DA2( captanAmerica );

const { alias } = ironMan;
console.log( 'destructing ' + alias );