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

 # Diagrams
-  <a href ="https://drive.google.com/file/d/1Bu-QNSPIKMDI1RN8MjQqqZ5OZs_c0S9m/view?usp=sharing"> UML Diagram </a>
- <a href = "https://github.com/ayhameed/HNGi-REST-API/blob/main/DOCUMENTATION.md"> Complete API documentation</a>
 

# The  API
- ### CREATE Person (POST)
    - Route : `/api`
    - HTTP Method : POST
    - Description : This method creates a new product. The request body should contain the name of the 'person'

- ### Find Person (GET)
    - Route : `/api/user_id`
    - HTTP Method : GET
    - Description : This method retrieves a person from database either by  `name ` or  `id`

-  ### Modify Person (PUT)
    - Route : `/api/user_id`
    - HTTP Method : PUT
    - Description : This method retrieves a person from database either by  `name ` or  `id` then modifies the `name`

-  ### Delete Person (Delete)
    - Route : `/api/user_id`
    - HTTP Method : DELETE
    - Description : This method removes a person from database either by  `name ` or  `id`.

## Test script
- test cases have been included on `/tests`
- to run test, `run npm` test in terminal

<a href ="https://lucid.app/lucidchart/c30f517e-3bd1-4e17-a5ea-38be79d2f749/edit?viewport_loc=21%2C-11%2C1579%2C860%2C0_0&invitationId=inv_abce64fd-4d23-443f-b983-2f9834cba86a"> UML Diagram (On Lucid Chart) </a>
<a href = "https://github.com/ayhameed/HNGi-REST-API/blob/main/DOCUMENTATION.md"> Complete API documentation</a>
<a href =  ""> Documentation on Postman </a>