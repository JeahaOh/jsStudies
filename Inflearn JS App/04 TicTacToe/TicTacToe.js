const body = document.body;
let table = document.createElement('table');
let result = document.getElementById('result');

let rows = [];
let columns = [];
let turn = 'X';

let asyncCallback = function (evt) {
  // console.log(evt.target);  //  colum
  // console.log( evt.target.parentNode ); //  row
  // console.log( evt.target.parentNode.parentNode ); //  table

  let whichRow = rows.indexOf(evt.target.parentNode);
  //  columns는 2차원 배열임.
  let whichColumn = columns[whichRow].indexOf(evt.target);
  console.log('Row : ' + whichRow, 'Column : ' + whichColumn);

  if (columns[whichRow][whichColumn].textContent === '') { //  칸이 이미 채워져 있는가?
    //  빈칸이라면
    console.log(turn);
    columns[whichRow][whichColumn].textContent = turn;

    //  세칸이 체워졌는지 확인하기위한 flag
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
    //  더 간단한 알고리즘이 있지만, 아직은 직관적인 방법을 사용해 보자.
    //  대각선 검사가 필요한 경우는 두가지다.
    //  \ 방향 대각인 경우
    if (whichRow - whichColumn === 0) {
      if (columns[0][0].textContent === turn &&
        columns[1][1].textContent === turn &&
        columns[2][2].textContent === turn
      ) {
        allTrue = true;
      }
    //  / 방향 대각인 경우
    } else if (Math.abs(whichRow - whichColumn) === 2) {
      if (columns[0][2].textContent === turn &&
        columns[1][1].textContent === turn &&
        columns[2][0].textContent === turn
      ) {
        allTrue = true;
      }
    }

    //  승리 조건을 만족 했다면
    if (allTrue) {
      console.log(turn + ' Is Win!!');
      result.textContent = turn + 'Is Win!!';
      
      //  초기화
      //  2차원 배열이기 때문에 2중 for문을 돌린다.
      turn = 'X';
      columns.forEach((r) => {
        r.forEach((c) => {
          console.log(c)
          c.textContent = '';
        });
      });
    } else {
      //  승자가 나오지 않았다면 턴을 돌린다.
      if (turn === 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }
    }
  }
};

//  initailize at first
for (let i = 1; i <= 3; i++) {
  let row = document.createElement('tr');
  rows.push(row);
  //  2차원 배열이 될것임.
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
console.log( rows, columns );
