/*
let word = '바보';
while( true ) {
  let newWord = prompt( word );
  if( word[word.length - 1] === newWord[0] ) {
    word = newWord;
  } else {
    alert('끝말 잇기 끝!')
    break;
  }
}
*/


for( let word = '바보'; true; ) {
  let newWord = prompt( word );
  if( word[word.length - 1] === newWord[0] ) {
    word = newWord;
  } else {
    alert('끝말 잇기 끝!')
    break;
  }
}