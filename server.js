const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import the route handlers
const createRouter = require('./src/controllers/createPerson');
const getPersonRouter = require('./src/controllers/getPerson');
const modifyPersonRouter = require('./src/controllers/modifyPerson');
const deletePersonRouter = require('./src/controllers/deletePerson');


require("dotenv").config();

const MongoDB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

const connectDB = mongoose
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

const PORT = process.env.PORT;

// Handle POST requests to /api to add a person
app.use('/api', createRouter);

// Handle GET requests to /api/:userID to fetch person details
app.use('/api', getPersonRouter);

// Handle PUT requests to /api/:userID to modify person details
app.use('/api', modifyPersonRouter);

// Handle DELETE requests to /api/:userID to remove a person from the DB
app.use('/api', deletePersonRouter);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports = app; // Export your Express app