/*
let nums = Array(45);
let fill = nums.fill();

let map = fill.map((e, idx) => {
  return idx + 1;
})
console.log (map);
*/
let nums = Array(45)
  .fill()
  .map((e, idx) => {
    return idx + 1;
  });

console.log( nums );

let shuffle = [];
while( nums.length > 0 ) {
  let choosed = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
  shuffle.push( choosed );
}
console.log( shuffle );

let bonus = shuffle[shuffle.length - 1];
let lucky = shuffle
  .splice(0, 6)
  .sort((p, c) => {
    return p - c;
  });

console.log( lucky , bonus );

let result = document.getElementById('result');

for( let i = 0; i< lucky.length; i++ ){
  let ball = document.createElement('div');
  ball.textContent = lucky[i];
  result.appendChild(ball)
}
let bns = document.getElementsByClassName('bonuus')[0];
bns.textContent = bonus;
// bns.appendChild(bonuus)