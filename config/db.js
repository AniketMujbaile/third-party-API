const { Pool } = require('pg');
require("dotenv").config({ path: './.env' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
});

const createTransactions = `
  CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    product_title VARCHAR(255),
    description TEXT,
    price DECIMAL,
    date_of_sale DATE
  );
`;

const dropTransactions = `
  DROP TABLE IF EXISTS transactions;
`;

// Function to create tables
async function createTables() {
  try {
    const client = await pool.connect();
    await client.query(dropTransactions); 
    await client.query(createTransactions);
    console.log('Tables created successfully');
    client.release();
  } catch (err) {
    console.error('Error creating tables:', err);
  }
}

// Call the function to create tables
createTables();

module.exports = pool;

 