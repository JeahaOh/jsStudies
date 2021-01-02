# Text Object
- Node
  - CharacterData
    - Text
      - Comment

텍스트 객체는 텍스느 노드에 대한 DOM 객체로 CharacterData를 상속 받는다.  
주목할 것은 DOM에서는 공백이나 줄바꿈도 텍스트 노드라는점이다.  

## 주요기능
### 값
텍스트 노드의 값을 가져오는 API
- data
- nodeValue
### 조작
- appendData()
- deleteData()
- insertData()
- replaceData()
- subStringData()
### 생성
- document.createTextNode()

# Value API
텍스트 노드는 DOM에서 실질적인 데이터가 저장되는 객체이다.  
따라서 텍스트 노드에는 값과 관련된 여러 기능들이 있는데,  
값을 가져오는 두개의 API를 알아보자.  
- target.nodeValue
- target.data

# Manipulation API
텍스트 노드가 상속 받은 CharacterData 객체는 문자를 제어할 수 있는 다양한 API를 제공함.
- appendData()
- deleteData()
- insertData()
- replaceData()
- substringData()