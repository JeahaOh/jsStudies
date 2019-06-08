/**
 * 배열과 반복문의 조우
 * 배열의 진가는 반복문을 만났을 때 나타난다.
 */
function get_members() {
  return ['A', 'B', 'C'];
}

members = get_members();
//  members.length는 배열에 담긴 값의 숫자를 알려준다.
for( i = 0; i < members.length; i++ ){
  console.log( members[i].toLowerCase() );
}
