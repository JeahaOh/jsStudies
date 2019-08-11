const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response) => {
  const path = url.parse(request.url, true).pathname; // url에서 path 추출
  if (request.method === 'GET') { // GET 요청이면


    if (path === '/01') { // 주소가 /01이면
      response.writeHead(200,{'Content-Type':'text/html'}); // header 설정
      fs.readFile(__dirname + '/01.html', (err, data) => { // 파일 읽는 메소드
        if (err) {
          return console.error(err); // 에러 발생시 에러 기록하고 종료
        }
        response.end(data, 'utf-8'); // 브라우저로 전송
      });

    } else if (path === '/02') { // 주소가 /이면
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/02.html', (err, data) => {
        if (err) {
          return console.error(err);
        }
        response.end(data, 'utf-8');
      });

    } else if (path === '/TT') { // 주소가 /이면
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/TT.html', (err, data) => {
        if (err) {
          return console.error(err);
        }
        response.end(data, 'utf-8');
      });

    } else { // 매칭되는 주소가 없으면
      response.statusCode = 404; // 404 상태 코드
      response.end('404 Not Found');
    }


  }
}).listen(3000);