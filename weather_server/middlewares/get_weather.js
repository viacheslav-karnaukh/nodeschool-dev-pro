const { subscribeForWeather } = require('../services');
const { createWeatherList } = require('../utilities');


const getWeather = (req, res, next) => {
    if(req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        subscribeForWeather({
            onWeatherFetched: (weather) => res.end(`${createWeatherList(weather)}`)
        });
    }
    next();
};

module.exports = getWeather;