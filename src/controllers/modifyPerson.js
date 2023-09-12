const express = require('express');
const mongoose = require("mongoose");
const Person = require('../models/personModel');

const router = express.Router();

// Route to modify details of a person by ID
router.put('/:userID', async (req, res) => {
  try {
    const { userID } = req.params;
    const { newData } = req.body;

    if (!newData || typeof newData !== 'object') {
      return res.status(400).json({ message: 'New data object is required' });
    }

    // Perform a cast check for the ID
    if (!mongoose.isValidObjectId(userID)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Modify by ID
    const person = await Person.findByIdAndUpdate(userID, newData, { new: true });

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    // Return the modified person's details
    res.status(200).json({ person });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
