const express = require('express');
const Person = require('../models/personModel');

const router = express.Router();

// Route to delete a person by name or ID
router.delete('/', async (req, res) => {
  try {
    const { name, id } = req.query;

    if (!name && !id) {
      return res.status(400).json({ message: 'Name or ID parameter is required' });
    }

    let deletedPerson;

    if (id) {
      // Delete by ID
      deletedPerson = await Person.findByIdAndDelete(id);
    } else {
      // Delete by name
      deletedPerson = await Person.findOneAndDelete({ name });
    }

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
