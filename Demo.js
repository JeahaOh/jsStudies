var http = require( 'http' );
var fs = require( 'fs' );


var app = http.createServer( function( request, response ) {
    var url = request.url;
    if( request.url == '/favicon.ico' ) {
      response.writeHead( 404 );
      response.end(  );
   
  } else if( request.url == '/' ) {
    result = fs.readFileSync( __dirname + url );
    response.writeHead( 200 );
    response.end( result );
  }
    /*
    } else if( request.url == '/3' ) {
      url = '/Demo3.html';
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
    */
    response.writeHead( 200 );
    console.log( __dirname + url );
    response.end( fs.readFileSync( __dirname + url ) );
});



app.listen( 3000 );