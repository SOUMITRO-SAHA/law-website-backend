const express = require('express');
const router = express.Router();

const {
  createAbout,
  getAllAboutEntries,
  getAboutEntryById,
  updateAboutEntryById,
  deleteAboutEntryById,
} = require('../controllers/about.controller');

// Create a new about entry
router.post('/', createAbout);

// Get all about entries
router.get('/', getAllAboutEntries);

// Get a specific about entry by ID
router.get('/:id', getAboutEntryById);

// Update a specific about entry by ID
router.patch('/:id', updateAboutEntryById);

// Delete a specific about entry by ID
router.delete('/:id', deleteAboutEntryById);

module.exports = router;
