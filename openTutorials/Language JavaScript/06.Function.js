function numbering() {
  i = 0;
  while(i < 10){
    console.log(i);
    i += 1;
  }
}

numbering();

function get_name(){
  return 'Jeaha';
}

console.log(get_name());

function get_args(args1 , args2){
  return args1 + args2;
}

console.log( get_args('WHAT ', `the hack`) );