const express = require('express');
const Person = require('../models/personModel');

const router = express.Router();

// Route to fetch details of a person by name or ID
router.get('/', async (req, res) => {
  try {
    const { name, id } = req.query;

    if (!name && !id) {
      return res.status(400).json({ message: 'Name or ID parameter is required' });
    }

    let person;

    if (id) {
      // Fetch by ID
      person = await Person.findById(id);
    } else {
      // Fetch by name
      person = await Person.findOne({ name });
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
