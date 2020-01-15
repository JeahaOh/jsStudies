//  빈 배열 생성
let nums = Array(45);
// console.log( nums );
//  IE에서는 fill()을 쓸수 없음.
let fill = nums.fill();

fill.forEach((e, idx) => {
  fill[idx] = idx + 1;
})
console.log (nums);