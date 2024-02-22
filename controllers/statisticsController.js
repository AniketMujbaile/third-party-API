const pool = require('../config/db');

const getStatistics = async (req, res) => {
    try {
        const { month } = req.query;

        // Calculate total sale amount of selected month
        const totalSaleAmountQuery = await pool.query('SELECT SUM(price) FROM transactions WHERE EXTRACT(MONTH FROM date_of_sale) = $1', [month]);
        const totalSaleAmount = parseFloat(totalSaleAmountQuery.rows[0].sum);

        const totalSoldItems = 0;
        const totalNotSoldItems = 0;

        res.status(200).json({
            totalSaleAmount,
            totalSoldItems,
            totalNotSoldItems
        });
    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {
    getStatistics
};

 