const { getStatistics } = require('./statisticsController');
const { getBarChartData } = require('./barChartController');
const { getPieChartData } = require('./pieChartController');

const getCombinedData = async (req, res) => {
    try {
        const { month } = req.query;

        // Call all three APIs and await their responses
        const statistics = await getStatistics(req, res); 
        const barChartData = await getBarChartData(req, res); 
        const pieChartData = await getPieChartData(req, res); 

        // Combine responses into a single JSON object
        const combinedData = {
            statistics,
            barChartData,
            pieChartData
        };

        res.status(200).json(combinedData);
    } catch (error) {
        console.error('Error fetching combined data:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {
    getCombinedData
};

 