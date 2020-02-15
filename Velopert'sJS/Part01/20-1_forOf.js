const nums = [10, 20, 30, 40, 50];
//  배열 안에 있는것들을 이용해서 작업할 때 사용.
for( let num of nums ) {
  console.log( num );
}

//  인덱스만 뱉는다.
for( let i in nums ) {
  console.log( i )
}