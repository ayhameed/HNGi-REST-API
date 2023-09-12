const express = require('express');
const mongoose = require("mongoose");
const Person = require('../models/personModel');

const router = express.Router();

// Route to fetch details of a person by ID
router.get('/:userID', async (req, res) => {
  try {
    const { userID } = req.params;

    if (!userID) {
      return res.status(400).json({ message: 'UserID parameter is required' });
    }

    // Attempt to fetch by ID, handling CastError gracefully
    let person;
    try {
      person = await Person.findById(userID);
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid userID format' });
      }
      throw error; // Re-throw other errors for general handling
    }

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    // Return the person's details
    res.status(200).json({ person });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;