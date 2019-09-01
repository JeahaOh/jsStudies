# Document Object Model Tree
- Node
  - Document
    - HTMLDocment
  - CharacterData
    - Text
    - Comment
  - Attr
  - Element
    - HTMLElement
      - HTMLHeadElement
      - HTMLBodyElement
      - HTMLTitleElement
      - HTMLParagraghElement
      - HTMLInputElement
      - HTMLTableElement
      - ETC...
  
모든 엘리먼트는 HTMLElement의 자식이다.  
따라서 HTMLElement의 프로퍼티를 똑깉이 갖고 있다.  
동시에 엘리먼트의 성격에 따라서 자신만의 프로퍼티를 가지고 있는데,  
이것은 엘리먼트의 성격에 따라서 달라진다.  
  
HTMLElement는 Element의 자식이고,  
Element는 Node의 자식이다.  
Node는 Object의 자식이다.  
이러한 관계를 DOM Tree라고 한다.  
  
이러한 관계를 이해하지 못하면 필요한 API를 찾아내는 것이 어렵거나 혼란 스러울 수 있다.  
