##Document Object Model (DOM : 문서 객체 모델)
- 웹 브라우저가 HTML페이지를 인식하는 방식
- document 객체와 그 관련 객체들의 집합
js와 jQuery로, DOM을 조작, HTML페이지에 문서 객체들을 조작할 수 있음.


문서 객체를 선택할 때 사용하는 메소드
```
- document.getElementById(아이디)
    - 아이디를 사용해 문서 객체를 선택
- document.querySelector(선택자)
    - 선택자를 사용해 문서 객체를 선택
- document.getElementsByName(이름)
    - name속성으로 여러개의 문서객체를 선택
- document.getElementsByClassName(클래스)
    - class 속성으로 여러개의 문서 객체를 선택
- document.querySelectorAll(선택자)
    - 선택자로 여러개의 문서 객체를 선택함.
```
속성
```
- innerHTML
    - 내부 글자를 조작
- style
    - 스타일 조작

```
속성 조작 메소드
```
setAttribute(<속성이름>, <속성값>)    속성을 지정
getAttribute(<속성이름))            속성을 추출
```