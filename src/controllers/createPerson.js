const express = require('express');
const mongoose = require("mongoose");
const Person = require('../models/personModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    // Validate the request body
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Invalid name format' });
    }

    // Create a new Person
    const person = new Person({
      name,
    });

    // Save the person to the database
    await person.save();

    // Return the person data
    res.status(201).json({ id: person._id, name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;