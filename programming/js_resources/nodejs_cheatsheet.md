# NodeJS Cheatsheet

* Node.js is an open source server environment.

## Install
```
apt-get install nodejs
```

## Basic model 

* Basic js page: 

```
const http = require('http'); //reads a js file, executes the
file, and then proceeds to return an object

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

### package.json

```
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
},
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

## File System 


## Http

### GET Requests

```
const https = require('https')
const options = {
  hostname: 'github.com',
  port: 443,
  path: '/pissardini',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
```

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

A logical encapsulation of code in a single unit.
### Include module 
```
var http = require('http');
var dt = require('./mymodule');
```

### Create module 

* Creating a js file:

```
exports.myDateTime = function () {
  return Date();
};
```

* Importing module:

```
var date = require('./myDateTime.js');
console.log(date);
```

### Basic modules
```
var fs = require('fs'); //file system 
```

<!--JWT-->
<!--
# Pug 
```
npm install pug
```
-->

## Model 
```
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5)
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
```

* Save files in templates folder with extension .pug.
* In js file use:
```
app.set('views','./src/templates')
app.set('view engine','pug)


app.get('about', (req,res) => res.render('about')); //point to about.pug

app.get('/', (req,res) => {
    res.render('index'),{ //point to index.pug
        message:"Welcome";
      })
  });
```

# References

* [Official Website](https://nodejs.org/en/)