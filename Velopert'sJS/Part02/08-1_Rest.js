const purpleCuteSlime = {
  name : 'slime',
  attribute: 'cute',
  color: 'purple'
};

// let { color, ... rest } = purpleCuteSlime;
// console.log( color );
// console.log( rest );


let { color, ... cuteSlime } = purpleCuteSlime;
console.log( color );
console.log( cuteSlime );

let { attribute, ... slime } = cuteSlime;
console.log( slime );