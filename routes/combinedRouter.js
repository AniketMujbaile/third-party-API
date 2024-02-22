const express = require('express');
const combinedController = require('../controllers/combinedController');
const router = express.Router();

// Get combined data for a specific month
router.get('/combined', combinedController.getCombinedData);

module.exports = router;
