let x = Math.ceil( Math.random() * 9 );
let y = Math.ceil( Math.random() * 9 );
let result = x * y;

let body = document.body;

let quest = document.createElement( 'div' );
quest.textContent = String( x ) + ' X ' + String( y ) + ' = ?';
document.body.append( quest );

let form = document.createElement( 'form' );
document.body.append( form );

let input = document.createElement( 'input' )
input.type = 
form.append( input );

let btn = document.createElement( 'button' );
btn.textContent = 'Enter!';
form.append( btn );

let resultDiv = document.createElement( 'div' );
document.body.append( resultDiv );

input.focus();

form.addEventListener( 'submit', ( evt ) => {
  evt.preventDefault();
  console.log( input.value );
  if( result === Number(input.value) ) {
    resultDiv.textContent = 'GOOD';

    x = Math.ceil( Math.random() * 9 );
    y = Math.ceil( Math.random() * 9 );
    result = x * y;
    quest.textContent = String( x ) + ' X ' + String( y ) + ' = ?';

    input.value = '';
    input.focus();
  } else {
    resultDiv.textContent = 'DAMN IT';
    input.value = '';
    input.focus();
  }
});
