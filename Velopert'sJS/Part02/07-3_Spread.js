const slime = {
  name : 'slime'
};
const cuteSlime = {
  ... slime,
  attribute : 'cute'
};
const purpleCuteSlime = {
  ... cuteSlime,
  color : 'purple'
};


console.log( slime );

console.log( cuteSlime );

console.log( purpleCuteSlime );

console.log( purpleCuteSlime === slime );

const greenCuteSlime = {
  ... purpleCuteSlime, 
  color: 'green'
}

console.log( greenCuteSlime );

console.log( purpleCuteSlime === greenCuteSlime );

const blueCuteSlime = {
  color: 'blue',
  ... purpleCuteSlime
}

console.log( blueCuteSlime );

console.log( blueCuteSlime === greenCuteSlime );