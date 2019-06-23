/**
 * 좀 더 복잡한 예제를 살펴 보자.
 * Closure를 이용해 영화의 제목을 저장하고 있는 객체를 정의하고 있다.
 */
function factory_movie( title ) {
  return {
    get_title : function() {
      return title;
    },
    // set_title : function( _title ) {
    //   title = _title;
    // }
    set_title : function( _title ){
      if( typeof _title === 'String' ){
        title = _title;
      } else {
        console.log( 'title은 문자열 이어야 합니다.' );
        return;
      }
    }
  }
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log( ghost.get_title() );
console.log( matrix.get_title() );

ghost.set_title( '공각 기동대' );

console.log( ghost.get_title() );
console.log( matrix.get_title() );

ghost.set_title( 1 );

console.log( ghost.get_title() );
console.log( matrix.get_title() );

/**
 * 위의 예제를 통해서 알 수 있는 것들을 정리하자면,
 * 
 * 1. Closure는 객체의 메소드에서도 사용할 수 있다.
 *  위 예제는 함수의 리턴값으로 객체를 반환하고 있다.
 *  이 객체는 메소드 get_title과 set_title을 가지고 있다.
 *  이 메소드들은 외부함수인 factory_movie의 인자값으로 전달된 지역 변수 title을 사용하고 있다.
 * 
 * 2. 동일한 외부함수 안에서 만들어진 내부함수나 메소드는 외부 함수의 지역변수를 공유한다.
 *  set_title은 외부함수 factory_movie의 지역변수 title 값을 '공각기동대'로 변경했다.
 *  2번째 ghost.get_title();의 값이 '공각 기동대'인 것은 set_title()와 get_title 함수가 title의 값을 공유하고 있다는 의미다.
 * 
 * 3. 그런데 똑같은 외부함수 factory_movie를 공유하고 있는 ghost와 matrix의 get_title의 결과는 서로 각각 다르다.
 *  그것은 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로져가 생성되기 때문에 ghost와 matrix는 서로 완전히 독립된 객체가 된다.
 * 
 * 4. factory_movie의 지역변수 title은 2행에서 정의된 객체의 메소드에서만 접근 할 수 있는 값이다.
 *  이 말은 title의 값을 읽고 수정 할 수 있는 것은 factory_movie()를 통해서 만들어진 객체 뿐이라는 의미다.
 *  JS는 기본적으로 Private한 속성을 지원하지 않는데, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있게 된다.
 * 
 * ** Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미한다.
 * 이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있다.
 * JAVA 같은 언어에서는 이런 특성을 언어 문법 차원에서 지원하고 있다.
 */