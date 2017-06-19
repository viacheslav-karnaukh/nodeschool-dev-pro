const http = require('http');
const PORT = process.argv[2] || 3333;
const subscribeForWeather = require('./weather_service');
const createWeatherList = require('./weather_list_templater');

const getWeatherHandler = (req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        subscribeForWeather({
            onWeatherFetched: (weather) => res.end(`${createWeatherList(weather)}`)
        });
    }
};

http.createServer(getWeatherHandler).listen(PORT, () => console.log(`Server started on port ${PORT}`));
