const pool = require('../config/db');

const getAllTransactions = async (req, res) => {
    try {
        const { page = 1, perPage = 10, search = '' } = req.query;
        const offset = (page - 1) * perPage;
        const searchParam = `%${search}%`;

        // Fetch total count of transactions (for pagination)
        const totalCountQuery = await pool.query('SELECT COUNT(*) FROM transactions WHERE product_title ILIKE $1 OR description ILIKE $1', [searchParam]);
        const totalCount = parseInt(totalCountQuery.rows[0].count);

        // Fetch transactions based on search and pagination parameters
        const transactionsQuery = await pool.query('SELECT * FROM transactions WHERE product_title ILIKE $1 OR description ILIKE $1 ORDER BY date_of_sale LIMIT $2 OFFSET $3', [searchParam, perPage, offset]);
        const transactions = transactionsQuery.rows;

        res.status(200).json({ transactions, totalCount });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {
    getAllTransactions
};
