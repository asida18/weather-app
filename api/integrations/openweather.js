const axios = require('axios');
const API_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = process.env.OPEN_WEATHER_API_KEY || '8b2cb493cd9b750d720dedae4446d9fc';

const getWeatherByCity = async (city, forecast = false) => {
    let queryKey = forecast ? 'forecast' : 'weather';

    try {
        const res = await axios.get(`${API_URL}${queryKey}?q=${city}&appid=${API_KEY}&units=imperial`)
        return res.data;
    } catch(err) {
        return err.message;
    }
}

module.exports = {
    getWeatherByCity,
    API_URL
}