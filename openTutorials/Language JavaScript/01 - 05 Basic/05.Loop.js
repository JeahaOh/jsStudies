let i = 0;
while( i < 10 ){
  for( var j = 1; j < 10; j ++ ) {
    if( i === 0 || i === 1 ){
      continue;
    }
    console.log( i + ` X ` + j + ` = ` + i * j );
  }
  console.log('\n');
  i++;
}
