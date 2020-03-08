const animals = ['dog', 'cat'];
// const anotherAnimals = [... animals, 'pig' ];
const anotherAnimals = animals.concat('pig');

console.log( animals );
console.log( anotherAnimals );

const nums = [1, 2, 3, 4, 5];
const spreadNums = [...nums, 1000, ...nums];

console.log( spreadNums );