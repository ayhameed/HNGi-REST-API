##  API Documentation
    Endpoint: /api
        Description : Operation that can be performed

        - Add a Person
            URL: /api
            Method: POST
            Headers: Content-Type: application/json
            Body (JSON):
                {
                    "name": "abdulhameed yunusa"
                }

            Example Request: 
                POST /api
                {
                    "name": abdulhameed yunusa
                }

            Responses: 
                Status: 201 ( If Person was successfully added)
                {
                    "id": "64fe52afbbfdc9afd18900de",
                    "name": "abdulhameed yunusa"
                }

                Status: 400 (if the passed name is not a string)
                { 
                    message: 'Invalid name format' 
                }

                Status: 409 (if Person already exists)
                { 
                    message: 'Person already exists' 
                }

        - Find a Person
            URL: /api/userID
            Method: GET
            Route Parameters (userID):
                id (string, required): The unique ID of the person.

            Example Request: by id
                GET /api/6500705cbba5bda01ca8b10c

            Responses: 
                Status: 200 (If Person is found and status is returned )
                Body: JSON
                {
                    "person": {
                        "_id": "6500705cbba5bda01ca8b10c",
                        "name": "abdulhameed yunusa"
                    }
                }

                Status: 404 Not Found (If the person with the provided  ID does not exist)
                    Body (JSON):
                    {
                        "message": "Person not found"
                    }

                Status: 400 Bad Request (If id is not provided)
                    Body (JSON):
                    {
                        "message": "ID parameter is required"
                    }

        - Modify a Persons' details
            URL: /api/userID
            Method: PUT
            Body (JSON):
                name (string, required): The name of the person to be modified.
                newData (object, required): An object containing the new data to be applied to the person.
       
            Example Request: by id
                PUT /api/6500705cbba5bda01ca8b10c
                Content-Type: application/json
                {
                    "newData": {
                        "name": "Updated Name"
                    }
                }
       
            Responses :
                Status: 200 OK
                    Body (JSON):
                        {
                            "person": {
                                "_id": "6500705cbba5bda01ca8b10c",
                                "name": "Updated Name",
                                "__v" : 0
                            }
                        }

                Status: 404 Not Found (If the person with  ID does not exist)
                    Body (JSON):
                        {
                            "message": "Person not found"
                        }
                Status: 400 Bad Request (If newData is missing or not an object)
                    Body (JSON):
                        {
                         "message": "New data object is required"
                        }

                Status: 400 Bad Request (If neither name nor id is provided)
                    Body (JSON):
                        {
                            "message": "ID parameter is required"
                        }

        - Delete a person
            URL: /api/userID
            Method: DELETE
            Route Parameters (Provide userID):
                id (string, required): The unique ID of the person to be deleted.

            Example Request : Delete by id
                DELETE /api/6500705cbba5bda01ca8b10c

            Responses:
                Status: 200 OK (Person was successfully deleted)
                    Body (JSON):
                        {
                            "message": "Person deleted",
                            "person": {
                                "_id": "6500705cbba5bda01ca8b10c",
                                "name": "Abdulhameed Yunusa",
                                "__v": 0
                            }
                        }

                Status: 404 Not Found (If the person with the provided name or ID does not exist)
                    Body (JSON):
                    {
                        "message": "Person not found"
                    }
                Status: 400 Bad Request (If neither name nor id is provided)
                    Body (JSON):
                    {
                        "message": "Name or ID parameter is required"
                    }
# Diagrams
- UML Diagram
![Screenshot](/public/uml.png)

## Limitations and Assumptions
- The API (POST: /api) assumes that the provided name field is a string and is required.
    - If a person with the same name already exists, the API will return a 409 Conflict status.

- The route (GET: /api/user_id) accepts either the person's name or ID but not both. You must provide either name or id as a query parameter.
    - If neither name nor id is provided, the route returns a 400 Bad Request response.
    - If the person with the provided name or ID does not exist, the route returns a 404 Not Found response.

- The route (PUT: /api/user_id) accepts either the person's name or ID but not both. You must provide either name or id as a parameter.
    - If neither name nor id is provided, the route returns a 400 Bad Request response.
    - If the person with the provided name or ID does not exist, the route returns a 404 Not Found response.
    - The request body must include a newData object containing the updated data for the person.

- The route (DELETE: /api/user_id) accepts either the person's name or ID but not both. You must provide either name or id as a parameter.
    - If neither name nor id is provided, the route returns a 400 Bad Request response.
    - If the person with the provided name or ID does not exist, the route returns a 404 Not Found response.

## Setting Up and Deploying Locally
To set up and deploy the API locally, follow these steps:

- Clone the repository from GitHub. `git clone https://github.com/ayhameed/HNGi-REST-API`
- Install the required dependencies.
    - cd `<project_folder>`
    - `npm install`
- Create a .env file in the project folder and set the following environment variables:
    - PORT = `3000`
    - MONGODB_CONNECTION_URL = `<your_mongodb_connection_url`
- Start the server.
    - `node server.js` or `nodemon server.js`
- The API should now be accessible at http://localhost:3000/api.

- Remember to replace `<your_mongodb_connection_url>` with the actual values for your project.
