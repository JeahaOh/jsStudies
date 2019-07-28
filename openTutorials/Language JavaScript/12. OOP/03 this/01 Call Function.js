function func(){
  if(global === this){
    console.log('global === this');
  }
}

func(); //  global === this