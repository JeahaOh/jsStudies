/**
 * 함수가 없다면?
 */
function numbering() {
  i = 0;
  while(i < 10){
    console.log(i);
    i += 1;
  }
}

/*
numbering();
numbering();
numbering();
numbering();
numbering();
numbering();
numbering();
numbering();
numbering();
*/

for( var i = 0; i < 10; i++) {
  numbering();
}

/**
 * 재 사용성
 * 유지보수의 용이(maintance)
 * 가독성
 */