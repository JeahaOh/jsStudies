# jQuery AJAX
jQuery를 이용해서 AJAX를 이용하면 많은 이점이 있는데,  
그중 하나가 크로스브라우징의 문제를 jQuery가 알아서 해결해 준다는 것이다.

# $.ajax
문법은 다음과 같다.
```
$.ajax( [ settings ] );
```
setting은 AJAX 콩신을 위한 옵션을 담고 있는 객체가 들어간다.
- data : 서버로 데이터를 전송할 때 사용하는 옵션
- dataType : 서버에서 전송한 데이터를 어떤 형식의 데이터로 해석할 것인가를 지정.  
  값으로 올 수 있는 것은 xml, json, script, html이다.  
  형식을 지정하지 않으면 jQuery가 알아서 판단한다.
- success : 성공했을 때 호출할 콜백을 지정.
- type : 데이터를 전송하는 방법을 지정한다. get/post.