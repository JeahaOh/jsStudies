const num = document.getElementById('num');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons;


// console.log( num );
// console.log( increase );
// console.log( decrease );

increase.onclick = () => {
  console.log( 'increase' );
  const cur = parseInt( num.innerText, 10 );
  num.innerText = cur + 1;
}

decrease.onclick = () => {
  console.log( 'decrease' );
  const cur = parseInt( num.innerText, 10 );
  num.innerText = cur - 1;
}