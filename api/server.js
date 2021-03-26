require('dotenv').config();
const express = require("express");
const currentweather = require('./routes/currentWeather');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// List all routes here
app.get('/', (req, res) => res.send({
    name: 'Weather API',
    routes: {
        '/': 'index',
        '/weather/simi valley': 'GET Current weather for city',
        '/weather/forecast/simi valley': 'GET 5 day / 3 hour Forecast for city'
    }
}));
app.use('/weather', currentweather);

app.listen(port, () => {console.log(`Listening on port ${port}`)});