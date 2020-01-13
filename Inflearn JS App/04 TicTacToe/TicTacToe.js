const body = document.body;
let table = document.createElement('table');
let rows = [];
let columns = [];
let turn = 'X';
let result = document.getElementById('result');

let asyncCallback = function (evt) {
  // console.log(evt.target);  //  colum
  // console.log( evt.target.parentNode ); //  row
  // console.log( evt.target.parentNode.parentNode ); //  table

  let whichRow = rows.indexOf(evt.target.parentNode);
  console.log('Row : ' + whichRow);

  let whichColumn = columns[whichRow].indexOf(evt.target);
  console.log('Column : ' + whichColumn);

  if (columns[whichRow][whichColumn].textContent !== '') { //  칸이 이미 채워져 있는가?
    //  빈칸이 아님
  } else {
    //  빈칸
    columns[whichRow][whichColumn].textContent = turn;
    // console.log( turn );
    //  세칸이 체워졌는지 확인
    let allTrue = false;
    //  가로줄 검사
    if (columns[whichRow][0].textContent === turn &&
      columns[whichRow][1].textContent === turn &&
      columns[whichRow][2].textContent === turn) {
      allTrue = true;
    }
    //  세로줄 검사
    if (columns[0][whichColumn].textContent === turn &&
      columns[1][whichColumn].textContent === turn &&
      columns[2][whichColumn].textContent === turn) {
      allTrue = true;
    }
    //  대각선 검사
    if (whichRow - whichColumn === 0 ) { // 대각선 검사가 필요한 경우
      if (columns[0][0].textContent === turn &&
        columns[1][1].textContent === turn &&
        columns[2][2].textContent === turn
      ) {
        allTrue = true;
      }
    } else if (Math.abs(whichRow - whichColumn) === 2) {
      if (columns[0][2].textContent === turn &&
        columns[1][1].textContent === turn &&
        columns[2][0].textContent === turn
      ) {
        allTrue = true;
      }
    }

    if (allTrue) {
      console.log(turn + ' Is Win!!');
      result.textContent = turn + 'Is Win!!';
      //  초기화
      turn = 'X';
      columns.forEach( (row) => {
        row.forEach( (column) => {
          console.log( column )
          column.textContent = '';
        });
      });
    } else {
      if (turn === 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }
    }
  }
};

for (let i = 1; i <= 3; i++) {
  let row = document.createElement('tr');
  rows.push(row);
  columns.push([])
  for (let j = 1; j <= 3; j++) {
    // console.log( i + " : " + j );
    let column = document.createElement('td');
    column.addEventListener('click', asyncCallback);
    columns[i - 1].push(column)
    row.appendChild(column);
  }
  table.appendChild(row);
}
body.appendChild(table);
// console.log( rows, columns );
