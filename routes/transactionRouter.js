const express = require('express');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

// List all transactions with search and pagination
router.get('/transactions', transactionController.getAllTransactions);

module.exports = router;
