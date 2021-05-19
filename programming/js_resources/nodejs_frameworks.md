# Express

* A NodeJS Framework

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

# Hapi 

```
npm install @hapi/hapi
```

## Create a server

```
'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
```

## Create routings

```
'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
```