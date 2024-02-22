const express = require('express');
const pieChartController = require('../controllers/pieChartController');
const router = express.Router();

// Get pie chart data for a specific month
router.get('/pie-chart', pieChartController.getPieChartData);

module.exports = router;
