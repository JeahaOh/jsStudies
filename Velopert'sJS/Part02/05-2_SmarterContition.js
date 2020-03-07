//  if를 활용하는 것 보다 객체를 활용하는것이 더 낫다.
function makeSound( animals ) {
  const tasks = {
    dog: () => {
      console.log( 'bark bark');
    },
    cat() {
      console.log( 'meow' );
    },
    pig : function() {
      console.log( 'googoogoo goo gooo');
    }
  }
  
  const task = tasks[animals];
  if( !task ) {
    console.log( '...?' );
    return;
  }
  task();
}

makeSound( 'dog' );
makeSound( 'cat' );
makeSound( 'person' );