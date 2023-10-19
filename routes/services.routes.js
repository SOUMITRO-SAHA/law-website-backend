const express = require('express');
const router = express.Router();

const {
  createService,
  getAllServices,
  getServiceById,
  updateServiceById,
  deleteServiceById,
} = require('../controllers/services.controllers');

// Create a new service
router.post('/services', createService);

// Get all services
router.get('/services', getAllServices);

// Get a specific service by ID
router.get('/services/:id', getServiceById);

// Update a service by ID
router.put('/services/:id', updateServiceById);

// Delete a service by ID
router.delete('/services/:id', deleteServiceById);

module.exports = router;
