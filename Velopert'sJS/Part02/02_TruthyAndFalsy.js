function print( person ) {
  if( !person ) return;
  console.log( person.name );
}

const person = {
  name: 'Jon Snow'
};

print( person );

print();

const person2 = null;

print( person2 );


//  다음 5개의 값은 falsy한 값으로 false로 처리한다.
//  undefined와 null 체크는 다음과 같이 하는게 좋다.
console.log( '!undefined  : ' + !undefined );
console.log( '!null       : ' + !null );
console.log( '!0          : ' + !0 );
console.log( "!''         : " + !'' );
console.log( '!NaN        : ' + !NaN );

//  다음은 truthy한 값으로 true로 처리한다.
console.log( '!3          : ' + !3  );
console.log( "!'hello'    : " + !'hello' );
console.log( "!['arr']    : " + !['arr'] );
console.log( '![]         : ' + ![] );
console.log( '!{}         : ' + !{} );

let value, truthy;
value = { a : 1 };
if( value ) console.log( 'value가 truthy 하네요.' );

value = null;
if( value ) console.log( 'value가 truthy 하네요.' );

truthy = value ? true : false;
console.log( truthy );

value = { a : 1 };

truthy = !!value;
console.log( truthy );
