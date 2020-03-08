const slime = {
  name : 'slime'
};

const cuteSlime = slime;
cuteSlime.attribute = 'cute';

const purpleCuteSlime = cuteSlime;
purpleCuteSlime.color = 'purple';


console.log( slime );

console.log( cuteSlime );

console.log( purpleCuteSlime );

console.log( purpleCuteSlime === slime );