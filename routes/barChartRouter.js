const express = require('express');
const barChartController = require('../controllers/barChartController');
const router = express.Router();

// Get bar chart data for a specific month
router.get('/bar-chart', barChartController.getBarChartData);

module.exports = router;
