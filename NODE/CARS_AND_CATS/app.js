var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response){
    console.log('client request URL:', request.url);
    console.log('hello'); 
    console.log('REQUEST OBJECT', request);

    
    if(request.url === "/") {
        fs.readFile("views/index.html", "utf8", function(errors, contents){
            response.writeHead(200, {"content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    
   else  if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
     });
    
    }
    
    
    else if(request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/carsi") {
        fs.readFile("./images/car.jpeg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === "/catsi") {
        fs.readFile("./images/cat.jpeg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }

    

    else {
        response.writeHead(404);
        response.end('File not found!');
    }
});

server.listen(7077);
console.log("Running in locahost at port 7077");