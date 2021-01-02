# Node
Node 객체는 DOM에서 시조와 같은 역할을 한다.  
모든 DOM 객체는 Node 객체를 상속 받는다.  
Node 객체의 위상은 다음과 같다.
- Node
  - Attr
  - Document
    - HTMLDocument
  - CharactierData
    - Text
      - Comment
  - Element
    - HTMLElement
      - HTMLHeadElement
      - HTMLLIElement

## Node 관계 API
엘리먼트는 서로 부모, 자식, 혹은 형제자매 관계로 연결되어 있다.  
각각의 Node가 다른 Node와 연결된 정보를 보여주는 API를 통해서 문서를 프로그래밍적으로 탐색할 수 있다.  
Node 객체는 Node 간의 관계 정보를 담고 있는 일련의 API를 가지고 있다.

- Node.childNodes
  - 자식노드들을 유사배열에 담아서 리턴한다
- Node.firstChild
  - 첫번째 자식노드
- Node.lastChild
  - 마지막 자식노드
- Node.nextSibling
  - 다음 형제 노드
- Node.previousSibling
  - 이전 형제 노드
- Node.contains()
- Node.hasChildNodes()


## 노드의 종류 API
Node 객체는 모든 구셩요소를 대표하는 객체이기 때문에 각각의 `구성요소`가 어떤 카테고리에 속하는 것인지를 알려주는 식별자를 제공한다.  
노드 작업을 하게 되면 현재 선택된 노드가 어떤 타입인지를 판단해야 하는 경우가 있다.  
이런 경우에 사용할 수 있는 API가 nodeType, nodeName이다.
- Node.nodeType
  - node의 타입을 의미
- Node.nodeName
  - node의 이름(태그명을 의미한다.)
  
노드의 종류에 따라서 정해진 상수가 존재한다.  
아래는 모든 노드의 종류와 종류에 따른 값을 출력하는 예제이다.
```
for(var name in Node){
   console.log(name, Node[name]);
}

결과 : 
ELEMENT_NODE 1 
ATTRIBUTE_NODE 2 
TEXT_NODE 3 
CDATA_SECTION_NODE 4 
ENTITY_REFERENCE_NODE 5 
ENTITY_NODE 6 
PROCESSING_INSTRUCTION_NODE 7 
COMMENT_NODE 8 
DOCUMENT_NODE 9 
DOCUMENT_TYPE_NODE 10 
DOCUMENT_FRAGMENT_NODE 11 
NOTATION_NODE 12 
DOCUMENT_POSITION_DISCONNECTED 1 
DOCUMENT_POSITION_PRECEDING 2 
DOCUMENT_POSITION_FOLLOWING 4 
DOCUMENT_POSITION_CONTAINS 8 
DOCUMENT_POSITION_CONTAINED_BY 16 
DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC 32
```

## 값
Node 객체의 값을 제공하는 API
- Node.nodeValue
- Node.textContent

## 자식관리
Node 객체의 자식을 추가하는 방법에 대한 API
- Node.appendChild()
- Node.removeChild()

## 노드 추가
노드의 추가와 관련된 API들은 다음과 같다
- appendChild(child)
  - 노드의 마지막 자식으로 주어진 엘리먼트 추가
- insertBefore(new Element, referenceElement)
  - appendChild와 동작방법은 같으나 두번째 인자로 엘리먼트를 전달 했을 때,
    이것 앞에 엘리먼트가 추가된다.
  
노드를 추가하기 위해서는 추가할 엘리먼트를 생성해야 하는데, 이것은 document 객체의 기능이다.  
아래는 노드를 생성하는 API
- document.createElement(tagName)
  - 엘리먼트 노드를 추가한다
- document.createTextNod(data)
  - 텍스트 노드를 추가한다.

##  노드 제거
노드 제거를 위해서는 아래 API를 사용한다.  
이 때 메소드는 삭제 대상의 부모 노드 객체의 것을 실행해야 한다
- removeChild(child)

## 노드 바꾸기
- replaceChild(newChild, oldChild)
