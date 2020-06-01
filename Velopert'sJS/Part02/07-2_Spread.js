const slime = {
  name: 'slime'
};

const cuteSlime = slime;
cuteSlime.attribute = 'cute';

const purpleCuteSlime = cuteSlime;
purpleCuteSlime.color = 'purple';


console.log(slime, ' : slime');

console.log(cuteSlime, ' : cuteSlime');
console.log(cuteSlime === slime);

console.log(purpleCuteSlime, ' : purpleCuteSlime');

console.log(purpleCuteSlime === slime);