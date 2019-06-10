/**
 * CallBack은 비동기 처리에서 유용하게 사용된다.
 * 시간이 오래 걸리는 작업이 있을 때,
 * 이 작업이 완료 된 후에 처리해야 할 일을 콜백으로 지정하면 해당 작업이 끝났을 때,
 * 미리 등록한 작업을 수행하도록 할 수 있다.
 * 아래 코드는 서버환경에서 작동하므로 영상을 참고 하도록 하자.
 */

/*
//  datasource.json.js
{"title":"JavaScript","author":"egoing"};

//  Demo.html

<!DOCTYPE html>
<html>
<head>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
</head>
<body>
<script type="text/javascript">
    $.get('./datasource.json.js', function(result){
        console.log(result);
    }, 'json');
</script>
</body>
</html>
*/