# Global Object
전역객체(Global Object)는 특수한 객체다.  
모든 객체는 이 전역 객체의 프로퍼티다.  

## 전역객체 API
ECMAScript에서는 전역 객체의 API를 정의해두었다.  
그 외의 API는 호스트 환경에서 필요에 따라서 추가로 정의하고 있다.  
이를테면 웹 브라우져 JS에서 alert()라는 전역객체의 메소드가 존재하지만,  
node.js에는 존재하니 않는다.  
또한 전역객체의 이름도 호스트환경에 따라 다른데,  
웹브라우져에서 전역객체는 window지만, node.js에서는 global이다.