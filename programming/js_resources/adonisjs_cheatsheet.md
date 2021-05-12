# AdonisJS Cheatsheet

## Basic 

### Creating new project 

```
npm init adonis-ts-app@latest hello-world
# If using yarn
yarn create adonis-ts-app hello-world
```

### Running 

```
node ace serve --watch
```

### Compiling for production 

```
node ace build --production
```

The compiled output is written to the build folder. 

```
cd build
node server.js
```
