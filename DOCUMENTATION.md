##  API Documentation
    Endpoint: /api
        Description : Operation that can be performed

        - Request: Add Person
            URL: <url>/api
            Method: POST
            Headers: Content-Type: application/json
            Body (JSON):
                {
                    "name": "abdulhameed yunusa"
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

        - Request: Find Person
            URL: <url>/api
            Method: GET
            Query Parameters (Provide name or id):
                name (string, optional): The name of the person.
                id (string, optional): The unique ID of the person.

            Example Request: by name
                GET http://<url>/api?name=abdulhameed%20yunusa
                {
                    "name": abdulhameed yunusa
                }

            Example Request: by id
                GET http://<url>/api?id=64fe52afbbfdc9afd18900de
                {
                    "id": 64fe52afbbfdc9afd18900de
                }

            Response: 
                Status: 200 (If Person is found and status is returned )
                Body: JSON
                {
                    "person": {
                        "_id": "64fe52afbbfdc9afd18900de",
                        "name": "abdulhameed yunusa"
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

        - Request : Modify Person
            URL: http://<url>/api
            Method: PUT
            Body (JSON):
                name (string, optional): The name of the person to be modified.
                id (string, optional): The unique ID of the person to be modified.
                newData (object, required): An object containing the new data to be applied to the person.

            Example Request: by name
                PUT http://<url>/api
                Content-Type: application/json
                {
                "name": "abdulhameed yunusa",
                    "newData": {
                        "name": "Updated Name"
                    }
                }
       
            Example Request: by ID
                PUT http://<url>/api
                Content-Type: application/json
                {
                "id": "64fe52afbbfdc9afd18900de",
                    "newData": {
                        "name": "Updated Name"
                    }
                }
       
            Response
                Status: 200 OK
                    Body (JSON):
                        {
                            "person": {
                                "_id": "64fe52afbbfdc9afd18900de",
                                "name": "Updated Name"
                            }
                        }

                Status: 404 Not Found (If the person with the provided name or ID does not exist)
                    - Body (JSON):
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
                            "message": "Name or ID parameter is required"
                        }





## Limitations and Assumptions
- The API (POST: /api) assumes that the provided name field is a string and is required.
    - If a person with the same name already exists, the API will return a 409 Conflict status.

- The route (GET: /api) accepts either the person's name or ID but not both. You must provide either name or id as a query parameter.
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
