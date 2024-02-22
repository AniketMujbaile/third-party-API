const express = require('express');
const initializeController = require('../controllers/initializeController');
const router = express.Router();

// Initialize database with seed data
router.get('/initialize-database', initializeController.initializeDatabase);

module.exports = router;
