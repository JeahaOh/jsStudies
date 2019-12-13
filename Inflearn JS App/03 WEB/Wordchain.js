const body = document.body;

let word = document.createElement( 'div' );
word.textContent = '바보';
document.body.append( word );

let form = document.createElement( 'form' );
document.body.append( form );

let input = document.createElement( 'input' )
form.append( input );

let btn = document.createElement( 'button' );
btn.textContent = 'Enter!';
form.append( btn );

let resultDiv = document.createElement( 'div' );
document.body.append( resultDiv );

input.focus();

form.addEventListener( 'submit', ( evt ) => {
  evt.preventDefault();
  if( word.textContent[ word.textContent.length - 1] === input.value[0] ) {
    resultDiv.textContent = 'GOOD';
    word.textContent = input.value;
    input.value = '';
    input.focus();
  } else {
    resultDiv.textContent = 'DAMN IT';
    input.value = '';
    input.focus();
  }
});