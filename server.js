const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const app = express();

// Import the route handlers
const createRouter = require('./routes/createPerson');
const getPersonRouter = require('./routes/getPerson');
const modifyPersonRouter = require('./routes/modifyPerson');
const deletePersonRouter = require('./routes/deletePerson');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//allow cors to react app
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;

const MongoDB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
mongoose
    .connect(MongoDB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection to MongoDB successful");
    })
    .catch((error) => {
        console.error("MongoDB Connection error:", error);
    });

// Handle POST requests to /createPerson to add person
app.use('/api', createRouter);

// Handle GET request to /getPerson to Fetch person details
app.use('/api/user_id', getPersonRouter);

// Handle PUT request to /modifyPerson to modify person details
app.use('/api/user_id', modifyPersonRouter);

// Handle DELETE request to /deletePerson to remove person from DB
app.use('/api/user_id', deletePersonRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});