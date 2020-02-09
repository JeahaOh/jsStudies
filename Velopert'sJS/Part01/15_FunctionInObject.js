const dog = {
  name : '댕댕이',
  sound : '댕댕!',
  say1 : function say() {
    console.log( this.sound );
  },
  say2 : function() {
    console.log( this.sound );
  },
  say3 : () => {
    console.log( this.sound );
  }
};
dog.say1();
dog.say2();
dog.say3();   //  => 는 this를 모른다.

const cat = {
  name : '냐옹이',
  sound : '냐옹',
};

cat.say = dog.say1;
cat.say();

const catSay = cat.say;
catSay();   //  this로 엮인 관계가 없기 때문에 undefined.