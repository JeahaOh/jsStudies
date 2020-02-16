const alpha = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e',]

let cnts = alpha.reduce( (acc, cur) => {
  if( acc[cur] ) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log( cnts );