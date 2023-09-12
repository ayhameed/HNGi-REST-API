const express = require('express');
const mongoose = require('mongoose');
const Person = require('../models/personModel');

const router = express.Router();

// Route to delete a person by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Perform a cast check for the ID
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Delete by ID
    const deletedPerson = await Person.findByIdAndDelete(id);

    if (!deletedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }

    // Return the deleted person's details
    res.status(200).json({ message: 'Person deleted', person: deletedPerson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;