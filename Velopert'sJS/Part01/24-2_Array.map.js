const items = [
  {
    id: 1,
    text: 'text'
  },
  {
    id: 2,
    text: 'bye'
  }
];

const texts = items.map( item => item.text );

console.log( texts );