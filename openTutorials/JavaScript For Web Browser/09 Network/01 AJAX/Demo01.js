var http = require( 'http' );
var fs = require( 'fs' );


var app = http.createServer( function( request, response ) {
    var url = request.url;
    if(request.method = 'POST') {
      if(request.url == '/time2' ){
        var body = '';
        request.on('data', function( chunk) {
          body += chunk;
        });
        request.on('end', function() {
          console.log( 'REQUEST : ', body );

          //  예제가 node가 나이라 이 이상 하기가 어렵다.

          response.writeHead( 200 );
          response.end('');
        })
      }
    }
    if( request.url == '/1' ) {
      url = '/demo01.html';
      result = fs.readFileSync( __dirname + url );
    
    } else if( request.url == '/2' ) {
      url = '/demo02.html';
      result = fs.readFileSync( __dirname + url );

    } else if( request.url == '/jQuery.js' ) {
      url = '/../../../jquery-3.3.1.min.js';
      result = fs.readFileSync( __dirname + url );
    
    } else if( request.url == '/time') {
      var time = new Date() + '';
      console.log( '\tTIME : ', time );
      result = time;
    
    } else if( request.url == '/') {
      result = 'Hell The JS';
    } else {
      response.writeHead( 404 );
      response.end(  );
      return;
    }
    response.writeHead( 200 );
    console.log( __dirname + url );
    response.end( result );
});



app.listen( 3000 );