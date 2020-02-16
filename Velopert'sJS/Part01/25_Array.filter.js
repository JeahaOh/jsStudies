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


const tasksNotDone = todos.filter( todo => todo.done );
console.log( tasksNotDone );