const pool = require('../config/db');

const getBarChartData = async (req, res) => {
    try {
        const { month } = req.query;

        // Define price ranges
        const priceRanges = [
            { range: '0 - 100', min: 0, max: 100 },
            { range: '101 - 200', min: 101, max: 200 },
            // Define other price ranges...
        ];

        // Query for each price range
        const barChartData = [];
        for (const range of priceRanges) {
            const query = `SELECT COUNT(*) FROM transactions WHERE EXTRACT(MONTH FROM date_of_sale) = $1 AND price >= $2 AND price <= $3`;
            const result = await pool.query(query, [month, range.min, range.max]);
            const count = parseInt(result.rows[0].count);
            barChartData.push({ range: range.range, count });
        }

        res.status(200).json(barChartData);
    } catch (error) {
        console.error('Error fetching bar chart data:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {
    getBarChartData
};
