function increaseAndPrint( n ) {
  return new Promise( (rslv, rjct) => {
    setTimeout( () => {
      const value = n + 1;
      if( value === 5 ) {
        const err = new Error();
        err.name = 'Value Is Five Err';
        rjct( err );
        return;
      }
      console.log( value );
      rslv( value );
    }, 1000);
  });
}

increaseAndPrint( 0 )
.then( n => {
  return increaseAndPrint( n );
})
//  굳이 return callback 할 필요 없이 then 않에 함수를 넣어준다.
.then( increaseAndPrint )
.then( increaseAndPrint )
.then( increaseAndPrint )
.catch( err => {
  console.error( err.name );
});

/**
 * Promise를 이용하면 코드의 깊이가 더 깊어지지 않음.
 * But, then으로 이어지기 때문에,
 * - 에러가 일어난 부분을 파악하기 어려움.
 * - 특정 조건에 따른 분기처리를 하기 어려움.
 * - 특정 값을 공유하며 작업하기 번거로움.
 * -> async / await가 나옴.
 */