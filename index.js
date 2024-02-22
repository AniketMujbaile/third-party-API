const express = require('express');
const initializeRouter = require('./routes/initializeRouter');
const transactionRouter = require('./routes/transactionRouter');
const statisticsRouter = require('./routes/statisticsRouter'); 
const barChartRouter = require('./routes/barChartRouter'); 
const pieChartRouter = require('./routes/pieChartRouter'); 
const combinedRouter = require('./routes/combinedRouter'); 
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', initializeRouter);
app.use('/api', transactionRouter);
app.use('/api', statisticsRouter); 
app.use('/api', barChartRouter); 
app.use('/api', pieChartRouter); 
app.use('/api', combinedRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

 