# Docker Cheatsheet

## Build

### Build a image 

```
docker build -t [name_image:1.0]
```

### List images  

```
docker images
```

### Delete an image 

```
docker image rm [name_image:1.0]
```

## Run

### Run a container
```
docker run --name [container_name] -p 5000:80 [name_image]
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
docker container stop [name_container]
```

## Sharing 

### Pull image from a registry 

```
docker pull [myimage:1.0] 
```

### Push image from a registry 

```
docker push [myrepo/myimage:1.0] 
```

## Basic resources 

### Copy file into a container
```
cp [name_file] [name_container]:/[name_file] 
```

### Execute bash 
```
docker exec -it [name_container] bash
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