# HNG Stage 2 Task

## Task Description
A simple RESP API cable of crud operations on a "person" resource that interfaces with MongoDB.


## The  API Endpoints
- ### CREATE Person (POST)
    - Route : `/api`
    - HTTP Method :  `POST `
    - Description : Creates a new Person

- ### Find Person (GET)
    - Route : `/api/:userID`
    - HTTP Method :  `GET `
    - Description : Finds a person by userID

-  ### Modify Person (PUT)
    - Route : `/api/:userID `
    - HTTP Method :  `PUT `
    - Description : Updates a person's detail

-  ### Delete Person (Delete)
    - Route : `/api/:userID`
    - HTTP Method :  `DELETE `
    - Description : Delete a person

## Documentation
- <a href = "https://github.com/ayhameed/HNGi-REST-API/blob/main/DOCUMENTATION.md"> Complete API documentation</a>

## Set Up
- Clone this repository : `gitclone 'repo's url'`
- Install node dependenices : npm i
- Setup a mongodb instance at <a href="https://cloud.mongodb.com/"> Mongodb atlas </a> or using a local instance of Mongodb 
- create a .env file with the following fields:
    - MONGODB_CONNECTION_URL = `'Mongodb connection Url'`
    - PORT = `'desired port number'`

- ## Run
    - Open terminal and run `nodemon server.js` or `node server.js`
    - `nodemon server.js` would authomatically refresh the server when changes are made to *.js files
    - `node server.js`  would start up the server but you would need to restart the server when you make changes