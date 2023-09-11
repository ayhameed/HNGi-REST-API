##  API Documentation
    - ## Endpoint: /api
            - Add a New Person
            - Decription: Adds a new person to the database.

        - ##  Request
            - ## URL: url/api
            - ## Method: POST
            - ## Headers: Content-Type: application/json
            - Body (JSON):
                json
                ```{
                        "name": "abdulhameed yunusa"
                    }```
## Limitations and Assumptions
The API assumes that the provided name field is a string and is required.
If a person with the same name already exists, the API will return a 409 Conflict status.

## Setting Up and Deploying Locally
To set up and deploy the API locally, follow these steps:

- Clone the repository from GitHub. `git clone https://github.com/ayhameed/HNGi-REST-API`
- Install the required dependencies.
    - `cd <project_folder>`
    - `npm install`
- Create a .env file in the project folder and set the following environment variables:
    - `PORT=3000`
    - `MONGODB_CONNECTION_URL=<your_mongodb_connection_url`
- Start the server.
    - `npm server.js` or `nodemon server.js`
- The API should now be accessible at http://localhost:3000/api.

- Remember to replace `<your_mongodb_connection_url>` with the actual values for your project.
