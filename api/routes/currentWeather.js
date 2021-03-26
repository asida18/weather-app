const express = require('express');
const router = express.Router();
const { getWeatherByCity } = require('../integrations/openweather');

// GET current weather by city
router.get('/:city', async (req, res) => {
    const { city } = req.params;
    const data = await getWeatherByCity(city);
    res.send(data);
});

// GET current weather 5 day forecast by city
router.get('/forecast/:city', async (req, res) => {
    const { city } = req.params;
    const data = await getWeatherByCity(city, true);
    res.send(data);
});

module.exports = router;