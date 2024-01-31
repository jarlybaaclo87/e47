// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/kodego') {
        fs.readFile('./index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }else if(request.url === '/kodego.png') {
        fs.readFile('kodego.png', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }// request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});


// tell your server which port to run on
server.listen(3000, '127.0.0.1');
// print to terminal window
console.log("Running in localhost at port 6543");


































































// const http =  require('http');
// const fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('./public/index.html',function(err, data){
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(3000, '127.0.0.1');
// console.log("Server listening at port 3000");
