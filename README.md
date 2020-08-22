# Express Microservice Boilerplate

An express-based bootstrapping module for building microservices with Node JS. The boilerplate comes with preloaded components to get you started quickly to focus business logic code. We have been using this boilerplate for some time on production to run many of our node js microservices.


## Preloaded Component

* [Winston Module](https://github.com/PradeepJaiswar/express-microservice-boilerplate/tree/master/logger)
* [Mongo Module](https://github.com/PradeepJaiswar/express-microservice-boilerplate/tree/master/mongo)
* [Redis Module](https://github.com/PradeepJaiswar/express-microservice-boilerplate/tree/master/redis)
* [Kafka Module](https://github.com/PradeepJaiswar/express-microservice-boilerplate/tree/master/kafka) 
* [New Relic](https://github.com/PradeepJaiswar/express-microservice-boilerplate/tree/master/newrelic-readme.md)
* [Jwt Token](https://github.com/PradeepJaiswar/express-microservice-boilerplate/blob/develop/src/utils/jwt-token.ts)


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

Mongo - Mongo for demo  
Visit [http://localhost:8080/v1/mongo_demo](http://localhost:8080/v1/mongo_demo)

Redis - Redis for demo  
Visit [http://localhost:8080/v1/redis_demo](http://localhost:8080/v1/redis_demo)

## Build

`npm run build`

Uses Gulp [Gulp](https://gulpjs.com/) for TypeScript build

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

## Comments/issues

F-f-fork it, baby.
