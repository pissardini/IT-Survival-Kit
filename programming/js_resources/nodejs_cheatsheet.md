# NodeJS Cheatsheet

* Node.js is an open source server environment.

## Basic model 

* Basic js page: 

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

* Start server:

```
node page.js
```

## File System 


## Http 

### Header
```
res.writeHead(200, {'Content-Type': 'text/html'});
```
### URL 
```
res.write(req.url);
```

### Split query string 
```
var q = url.parse(req.url, true).query;
```

## Modules 

### Include module 
```
var http = require('http');
var dt = require('./mymodule');
```

### Create module 
```
exports.myDateTime = function () {
  return Date();
};
```

### Basic modules
```
var fs = require('fs'); //file system 
```

## References

* [Official Website] (https://nodejs.org/en/)