var http = require ('http');

const server = http.createServer((req,res)=> {
		res.statusCode = 200;
		res.writeHead(200, {'Content-Type': 'text-html'});
		res.end('Hello World');
}).listen(8080);