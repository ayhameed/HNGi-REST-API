const express = require('express');
const Person = require('../models/personModel');

const router = express.Router();

// Route to modify details of a person by name or ID
router.put('/', async (req, res) => {
  try {
    const { name, id, newData } = req.body;

    if (!newData || (typeof newData !== 'object')) {
      return res.status(400).json({ message: 'New data object is required' });
    }

    let person;

    if (id) {
      // Modify by ID
      person = await Person.findByIdAndUpdate(id, newData, { new: true });
    } else if (name) {
      // Modify by name
      person = await Person.findOneAndUpdate({ name }, newData, { new: true });
    } else {
      return res.status(400).json({ message: 'Name or ID parameter is required' });
    }

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
