/**
 *  배열이 없다면
 */

function get_member1() {
  return '1';
}

console.log( get_member1() );

function get_member2() {
  return '2';
}

console.log( get_member2() );

function get_member3() {
  return '3';
}

console.log( get_member3() );

//  함수는 하나의 값만 출력 하기 때문에 배열을 사용한다.

function get_members() {
  return ['1', '2', '3'];
}

var members = get_members();

console.log( members[0] );
