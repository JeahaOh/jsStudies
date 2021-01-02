# on API
on은 jQuery에서 가장 중요한 이벤트 API이다.
on API를 통해서 jQuery에서 이벤트를 다루는 기본적인 문법은 다음과 같다.
```
  .on( event [, selector ] [, data ], handler( eventObject ) )
```
- event : 등록하고자 하는 이벤트 타입을 지정한다. (ex: 'click')
- selector : 이벤트가 설치된 엘리먼트의 하위 엘리먼트를 이밴트 대상으로 필터링
- data : 이벤트가 실행될 때 핸들러로 전달될 데이터를 설정
- handler : 이벤트 핸들러 함수
