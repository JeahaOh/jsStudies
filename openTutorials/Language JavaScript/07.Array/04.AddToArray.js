var li = ['a', 'b', 'c', 'd', 'e'];

//  배열의 뒤에 데이터를 밀어 넣는다.
li.push('f');

console.log(li);

//  배열의 뒤에 복수의 원소를  추가함.
li = li.concat(['g', 'h']);

console.log(li);

//  배열의 앞에 데이터를 집어 넣음.
li.unshift('1');

console.log(li);

//  배열의 중간에 데이터를 집어 넣음.
li.splice(1, 0, 'x');

console.log(li);

li.splice(1, 1, 'X');
console.log(li);

li.splice(1, 1, 'x', 'y');
console.log(li);