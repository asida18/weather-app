const axios = require('axios');
const { getWeatherByCity, API_URL } = require('../integrations/openweather');

jest.mock('axios');

describe('getWeatherByCity', () => {
    it('fetches weather data by city name', async () => {
        axios.get.mockResolvedValue({
            data: {
                coord: { lon: -12.35, lat: 9.5667 },
                weather: [{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
                base: 'stations',
                main: {
                    temp: 78.04,
                    feels_like: 83.17,
                    temp_min: 78.04,
                    temp_max: 78.04,
                    pressure: 1012,
                    humidity: 71,
                    sea_level: 1012,
                    grnd_level: 1003
                },
                visibility: 10000,
                wind: { speed: 2.59, deg: 198, gust: 6.89 },
                clouds: { all: 9 },
                dt: 1616721723,
                sys: { country: 'SL', sunrise: 1616741401, sunset: 1616785191 },
                timezone: 0,
                id: 2408154,
                name: 'Simi',
                cod: 200

            }
        });
             

        const address = await getWeatherByCity('simi');
        expect(address.name).toEqual('Simi');

        expect(axios.get).toHaveBeenCalledWith(
            `${API_URL}?q=simi&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`,
        )
    });
})

