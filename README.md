# Set Up
- Clone this repository : `gitclone 'repo's url'`
- Install node dependenices : npm i
- Setup a mongodb instance at <a href="https://cloud.mongodb.com/"> Mongodb atlas </a> or using a local instance of Mongodb 
- create a .env file with the following fields:
    - MONGODB_CONNECTION_URL = `'Mongodb connection Url'`
    - PORT = `'desired port number'`

# Run
 - Open terminal and run `nodemon server.js` or `node server.js`
 - `nodemon server.js` would authomatically refresh the server when changes are made to *.js files
 - `node server.js`  would start up the server but you would need to restart the server when you make changes

 # Folder Setup
 - /models - contains DB schemas for mongoDB
 - /routes - contains routes and logic
 - .env - contains enviromental variables
 - server.js - contains an aggregation of operations that powers the server


# The  API
- ### CREATE (POST)
    - Route : `/api`
    - HTTP Method : POST
    - Description : This method creates a new product. The request body should contain the name of the 'person'