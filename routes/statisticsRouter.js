const express = require('express');
const statisticsController = require('../controllers/statisticsController');
const router = express.Router();

// Get statistics for a specific month
router.get('/statistics', statisticsController.getStatistics);

module.exports = router;
