# Attribute
속성은 HTML에서 태그명 만으로는 부족한 부가적인 정보이다.  
이 속성을 어떻게 제어하는지 알아보자.  
각각의 기능은 이름을 통해서 충분히 유추할 수 있다.  
- Element.getAttribute(name)
- Element.setAttributr(name, value)
- Element.hasAttribute(name)
- Element.removeAttribute(name)
  
## Attribute And Property
모든 엘리먼트의 (HTML)속성은 (JavaScript 객체의) 속성과 프로퍼티로 제어가 가능하다.  
setAttribute('class', 'important')와  
className='important'는 같은 결과를 만든다.  
하지만 전자는 attribute 방식(속성)이고 후자는 property 방식이다.  
property 방식은 좀 더 간편하고 속도도 빠르지만 실제 html 속성의 이름과 다른 이름을 갖는 경우가 있다. 이것은 자바스크립트의 이름 규칙 때문이다.  
  
- class className
- readonly  readOnly
- rowspan rowSpan
- colspan colSpan
- usemap  userMap
- frameborder frameBorder
- for htmlFor
- maxlength maxLength