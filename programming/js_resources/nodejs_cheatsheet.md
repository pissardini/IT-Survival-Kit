# NodeJS Cheatsheet

* Node.js is an open source server environment.

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

# Express

## Install 
```
npm install express --save
```
## Import 
```
const express = require('express')
const app     = express();
const port    = 3000; 

app.listen(port, ()=>console.log('API running'));
```

## Routing 

* Creating a route in **routes** (ex: bird.js).

```
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});
```

* Call in app: 

```
var express = require('express');
var app = express();


app.use('/named_route',named_route)

app.listen(8000, function () {
  console.log('Listening to Port 8000');
});
```

# MongoDB

## Create database

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://address";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
```

## Create a collection

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://address";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
```

## Insert into a collection

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://address";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Locust", address: "Highway 90" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
```

* Insert multiples documents:

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'Joshua', address: 'Highway 91'},
    { name: 'Michael', address: 'Lowstreet 14'}
   ];
     dbo.collection("customers").insertMany(myobj, function(err, res) {
       if (err) throw err;
       console.log("Number of documents inserted: " + res.insertedCount);
       db.close();
     });
});
```

## Find objects 

* Find one element: 

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
```

* Find all elements:

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

## Delete documents

* Delete one document:
```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
```

* Delete many documents:

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
```

# References

* [Official Website] (https://nodejs.org/en/)