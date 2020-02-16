const todos = [
  {
    id: 1,
    text: 'js',
    done: true
  },
  {
    id: 2,
    text: 'function',
    done: true
  },
  {
    id: 3,
    text: 'object',
    done: true
  },
  {
    id: 4,
    text: 'array',
    done: false
  },
];

let idx = todos.indexOf( 3 );
console.log( idx );

idx = todos.findIndex( todo => todo.id === 3 );
console.log( idx );

idx = todos.find( todo => todo.done === false );
console.log( idx );

