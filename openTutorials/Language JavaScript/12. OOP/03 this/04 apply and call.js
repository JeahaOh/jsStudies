//  함수의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다.
var o = {};
var p = {};

function func() {
  switch(this){
    case o:
      console.log('o\n');
      break;
    case p:
      console.log('p\n');
      break;
    case global:
      console.log('global\n');
      break;
  }
}

func();
func.apply(o);
func.apply(p);

/**
 * global
 * o
 * p
 */