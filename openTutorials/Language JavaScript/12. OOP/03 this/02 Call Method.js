//  객체의 소속인 메소드의 this는 그 객체를 가르킨다.
var obj = {
  func : function(){
    if( obj === this ){
      console.log('obj === this');
    }
  }
}

obj.func();