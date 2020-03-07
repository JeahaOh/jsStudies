// function isAnimal ( text ) {
//   return (
//     text === 'cat' || text === 'dog'
//   );
// }

// function isAnimal ( text ) {
//   const animals = [ 'cat', 'dog', ];
//   return animals.includes( text );
// }

const isAnimal = text => [ 'cat', 'dog', ].includes( text );


console.log( isAnimal( 'cat' ) );
console.log( isAnimal( 'mac' ) );

console.log( '-'.repeat(20) );

//  if나 switch보다 객체를 활용하는게 더 깔끔...
function getSound( animals ) {
  const sounds = {
    cat : 'meow',
    dog : 'bowwow'
  }
  return sounds[animals] || '...?';
}

console.log( getSound( 'dog' ) );
console.log( getSound( 'cat' ) );
console.log( getSound( 'person' ) );