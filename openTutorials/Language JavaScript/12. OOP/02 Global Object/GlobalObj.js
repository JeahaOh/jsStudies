function f(){
  console.log('f');
}

f();
global.f();

var obj = {
  'F' : function(){
    console.log('F');
  }
}

obj.F();
global.obj.F();