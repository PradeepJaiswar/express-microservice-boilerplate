# Express Microservice Boilerplate

An express-based bootstrapping module for building microservices with Node JS.

### Repository Practices ###

* Development folllows [git-flow](http://nvie.com/posts/a-successful-git-branching-model/)
* All development should take advantage of ES6 and ES7

### Prerequisites ###

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) - Version v8.9.0 (with NPM)

## Installation

* `git clone <this-repository-url>`
* change into the new directory
* `npm install`

## Running / Development

* `npm run dev`

Boilerplate comes with below in-built routes 

Default - Default for demo  
Visit [http://localhost:8080/v1/default](http://localhost:8080/v1/default)

Health check - Can be used for adding a service health check logic  
Visit [http://localhost:8080/v1/default](http://localhost:8080/v1/default)

Pug demo -  templating integration https://pugjs.org/api/getting-started.html  
Visit [http://localhost:8080/v1/pug_demo](http://localhost:8080/v1/pug_demo)

## Build

`npm run build`

Uses Gulp [Gulp](https://gulpjs.com/) for TypeScript build

## Docker
#### Prerequisite: Install docker
* Ubuntu docker :: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04
* Ubuntu :: docker-compose : https://linuxize.com/post/how-to-install-and-use-docker-compose-on-ubuntu-18-04
* Mac :: https://docs.docker.com/docker-for-mac/install/
* Windows :: https://docs.docker.com/v17.09/docker-for-windows/install/

Note : don't run docker with sudo

### Build and Run

#### Local Development

Build `docker-compose -f docker-compose.dev.yml build`

Run `docker-compose -f docker-compose.dev.yml up --build`

Build & Run `docker-compose -f docker-compose.dev.yml up --build`

#### Test

Build `docker-compose -f docker-compose.test.yml build`

Run `docker-compose -f docker-compose.test.yml up -d`

Build & Run `docker-compose -f docker-compose.test.yml up --build -d`

Visit [http://localhost:8080/](http://localhost:8080/)

#### UAT

Build `docker-compose -f docker-compose.uat.yml build`

Run `docker-compose -f docker-compose.uat.yml up -d`

Build & Run `docker-compose -f docker-compose.uat.yml up --build -d`

#### PRODUCTION

Build `docker-compose -f docker-compose.prod.yml build`

Run `docker-compose -f docker-compose.prod.yml up -d`

Build & Run `docker-compose -f docker-compose.prod.yml up --build -d`


#### FOLDER STRUCTURE

```
config
└───prod
│   prod_config
└───test
│   test_config
└───uat
│   uat_config
deployment
locales
│   english-us
logger
│   winston-logger-setup  
src
└───boot
│   └───initializers
│         initializer-1
│         initializer-2
│         ...
│   boot-file
└───controllers
│     controller-1
│     controller-2
│     ...
└───middlewares
│     middleware-1
│     middleware-2
│     ...
└───models
│     model-1
│     model-2
│     ...
└───routes
│     route-1
│     route-2
│     ...
└───services
│     service-1
│     service-2
│     ...
└───utils
│     util-1
│     util-2
│     ...
└───tests
│     test-1
│     test-2
│     ...
```
