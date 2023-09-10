const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors())
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

const Person = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });