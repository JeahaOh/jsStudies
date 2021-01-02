# Document Object
DOM의 시작점이고 동시에 문서 전체를 의미하는 Node.  
Document -> DOM에서 정의 되어 있는 규격, 인터페이스 -> HTMLDocument를 사용하게 됨.  
  
HTMLDocument는 HTML문서 전체를 대표하는 객체이면서 전체를 대표하는 Node라고 볼 수 있음.  
  
```
//  document 객체는 window 객체의 소속이다.
document === window.document
//  true

//  document 객체의 자식으로는 Doctype과 html이 있다.
document.childNodes[0]
//  <!DOCTYPE HTML>
document.childNodes[1]
//  <html></html>
```

## 주요 API
### 노드 생성 API
document 객체의 주요 임무는 새로운 노드를 생성하는 역할임.  
이에 대한 내용은 노드 변경 API에서 학습 하였음.  
- createElement()
- createTextNode()

### 문서 정보 API
- title
- URL
- referrer
- lastModified