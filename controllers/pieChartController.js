const pool = require('../config/db');

const getPieChartData = async (req, res) => {
    try {
        const { month } = req.query;

        // Query unique categories and their counts for selected month
        const query = `SELECT DISTINCT column_name FROM information_schema.columns WHERE table_name = 'transactions'`;
        const result = await pool.query(query);
        const pieChartData = result.rows.map(row => ({ column_name: row.column_name }));

        res.status(200).json(pieChartData);
    } catch (error) {
        console.error('Error fetching pie chart data:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {
    getPieChartData
};

 