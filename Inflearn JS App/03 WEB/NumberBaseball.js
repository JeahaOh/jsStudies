const body = document.body;
let inning;
let candidatePlayers;
let players;

const init = function() {
  inning = 0;
  candidatePlayers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  players = [];

  for( let i = 0; i < 4; i++ ) {
    let player = candidatePlayers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    players.push( player );
  }
  console.log( players );
}

init();



let result = document.createElement( 'h1' );
body.append( result );

let form = document.createElement( 'form' );
body.append( form );

let input = document.createElement( 'input' );
input.maxLength = 4;
input.type = 'Number';
form.append( input );
input.focus();

let btn = document.createElement( 'button' );
btn.textContent = 'Enter!';
form.append( btn );

form.addEventListener( 'submit', ( evt ) => {
  inning++;
  // console.log( inning );
  evt.preventDefault();
  let answer = input.value;
  console.log( answer );
  if( answer === players.join('') ) {
    result.textContent = 'Home Runn!!';
    input.value = '';
    init();
  } else {
    if( inning >= 10 ) {
      result.textContent = 'You Loose.\n' + players.join(',');
      input.value = '';
      input.focus();
      init();
    } else {
      let arr = answer.split('');
      let strike = 0;
      let ball = 0;
      for( var i = 0; i <=  3; i ++ ) {
        console.log(Number(arr[i]) + ' : ' + Number(players[i]));
        if( Number(arr[i]) == Number(players[i]) ) {
          strike ++;
        } else if ( players.indexOf(Number(arr[i])) > -1 ) {
          ball ++;
        }
      }
      result.textContent = inning + ' inn : ' + strike + ' Strike ' + ball + ' ball.'
      input.value = '';
    }
  }
  input.focus();
});