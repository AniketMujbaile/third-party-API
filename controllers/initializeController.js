const axios = require('axios');
const pool = require('../config/db');

// Function to fetch JSON data from the third-party API
async function fetchJSONData() {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        return response.data;  
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        throw error;  
    }
}

// Function to initialize the database with seed data
async function initializeDatabase() {
    try {
        // Fetch JSON data
        const jsonData = await fetchJSONData();

        // Insert data into the database
        const client = await pool.connect();
        const insertQuery = 'INSERT INTO transactions (product_title, description, price, date_of_sale) VALUES ($1, $2, $3, $4)';
        jsonData.forEach(async (transaction) => {
            await client.query(insertQuery, [
                transaction.product_title,
                transaction.description,
                transaction.price,
                transaction.date_of_sale
            ]);
        });
        await client.release();

        console.log('Database initialized with seed data.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

initializeDatabase();

module.exports = {
    initializeDatabase
};

 