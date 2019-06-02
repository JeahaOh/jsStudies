console.log('<--- == --->');
//  false
console.log( 1 == 2 );

//  true
console.log( 1 == 1 );

//  false
console.log( 'one' == 'two' );

//  true
console.log( 'one' == 'one' );

console.log('<--- === --->');

//  true
console.log( 1 == '1' );

//  false
console.log( 1 === '1');

console.log('<--- Use === --->');

//  true
console.log( null == undefined );

//  false
console.log( null === undefined );

//  true
console.log( true == 1 );

//  false
console.log( true === 1 );

//  true
console.log( true == '1' );

//  false
console.log( true === '1' );

//  true
console.log( 0 === -0 );

//  false
console.log( NaN === NaN );

console.log('<--- != --->');

//  true
console.log( 1 != 2 );

//  false
console.log( 1 != 1);

//  true
console.log( 'one' != 'two' );

//  false
console.log( 'one' != 'one' );

console.log('<--- !== --->');
/**
 * !== 는 정확하게 같지 않다는 뜻.
 * 예제는 생략.
 */
console.log('<--- < --->');

console.log( 10 > 20 );

console.log( 10 >= 1 );
