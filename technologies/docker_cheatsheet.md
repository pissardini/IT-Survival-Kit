# Docker Cheatsheet

## Build

### Build a image 

```
docker build -t myimage:1.0
```

### List images  

```
docker images
```

### Delete an image 

```
docker image rm myimage:1.0
```

## Run

### Run a container
```
docker container run --name web -p
5000:80 alpine:3.9
```

### List networks

```
docker network ls
```

### List running containers

```
docker container ls 
```


### Stop a container
```
docker container stop mycontainer
```

## Sharing 

### Pull image from a registry 

```
docker pull myimage:1.0 
```

### Push image from a registry 

```
docker push myrepo/myimage:1.0 
```

## Docker-Compose 

### Basic model 

*  With Compose, you use a YAML file to configure your application’s services. 

* Basic model of docker-compose.yml: 

```
version: "3.9"  # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis
  redis:
    image: redis
volumes:
  logvolume01: {}

```

* Running:

```
docker-compose -f .\docker-compose.dev.yml up -d --build 
```

### Commands 

```
docker-compose start      Start services
docker-compose stop       Stop services
docker-compose pause      Pause services
docker-compose unpause    Unpause services
docker-compose up         Create and start containers 
docker-compose build      Build or rebuild services 
```

### Flags 

```
-f      Specify an alternate compose file
```
