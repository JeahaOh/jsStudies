# Velopert's JS
## 01 JS?
브라우져에서 사용하기 위해 만들어진 언어.  
UI를 동적으로 사용하기 위해 만들어짐.  
현재는 여러곳에서 사용됨.  
  - NodeJS -> ServerTime
  - Electron -> Desktop App
  - APP -> ReactNative, NativeScript
  - IOT -> NodeJS를 통해 사용.
  
## 02
  - learnjs.vlpt.us
  - codesandbox
  
## 03 변수
let, const, var  
난 친구 같은거 없어. -> let firends = null;  
범인이 누군지 모른다. -> let criminal; (undifined)  
  
## 04 산술 연산자, 대입 연산자
  - 산술 연산자 : +, -, *, /, ++, --
  - 대입 연산자 : =, +=, -=, /=, *=
  
## 05 논리 연산자
- NOT : !
- AND : &&
- OR  : ||
- 논리 연산의 순서
  - NOT > AND > OR
```
  const value =
  !(true && false || true && false || !false);
  // !(true && false || true && false || true);
  // !(false || false || true);
  // !(true)
  // false
```
  
## 06 비교 연산자
- ===, ==, !==, !=, <, >, <=, >=
  
## 07 조건문 if
  
## 08 조건문 switch 
  
## 09 함수
  
## 10 함수 - Template Literal
ES6에서 나온 문법,  
``와 ${}를 사용함.  

## 11 함수 - 연습
  
## 12 함수 - 화살표 함수
ES6

## 13 객체
  
## 14 객체 - 비구조화 할당
ES6

## 15 객체 - 객체 안의 함수
  
## 16 객체 - Getter, Setter

## 17 배열

## 18 반복문 - for
반복 횟수가 정해진 경우.
  
## 19 반복문 - while
무한루프나 특정 조건에 만족할 때까지 반복해야 하는 경우.
  
## 20 반복문 - for ... of, for ... in
- for of -> 배열 안에 있는 것을 이용해서 작업할 때 이용.
- for in -> 객체 안에 있는 것을 이용해서 작업할 때 이용.

## 21 반복문 - continue, break
반복문의 탈출과 스킵.
  
## 22 반복문 - EX

## 23 배열 내장 함수 - forEach

## 24 배열 내장 함수 - map
- array.map -> 새로운 배열을 만듦.
- indexOf   -> 배열에서 인덱스를 찾음.
- findIndex -> 배열에서 객체의 인덱스를 찾음.
- find      -> 배열에서 객체를 찾음.
## 25 배열 내장 함수 - filter
배열에서 특정 조건을 걸러 새 배열을 만든다.

## 26 배열 내장 함수 - splice And slice
- splice -> 기존의 배열을 건드림.
- slice -> 기존의 배열을 건드리지 않음.

## 27 배열 내장 함수 - shift, pop, unshift, push, concat, join
- shift   -> 배열에서 원소를 앞에서 부터 꺼낸다. 기존 배열을 건드린다.
- pop     -> 배열에서 원소를 뒤에서 부터 꺼낸다. 기존 배열을 건드린다.
- unshift -> 배열에서 원소를 앞에서 부터 넣어준다.
- push    -> 배열에서 원소를 뒤에서 부터 넣어준다.
- concat  -> 기존의 배열을 건드리지 않고, 여러개의 배열을 합친 새로운 배열을 만든다.
- join    -> 배열을 문자열로 만듦.

## 28 배열 내장 함수 - reduce
배열 안의 모든 원소 값을 사용하여 어떤 값틀 연산할 때 사용함.  
뭐지 이건..
  
## 29 배열 내장 함수 - reduce 2
Array.reduce() 쓸곳이 많은 것 같은데 알듯 말듯 하네 이거.

## 30 Array - EX

## 31 Prototype And Class - 객체 생성자

## 32 Prototype And Class - 객체 생성자 상속하기

## 33 Prototype And Class - ES6 Class

## 34 Prototype And Class - EX