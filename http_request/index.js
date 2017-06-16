const https = require('https');
const Rx = require('rx');

const WEATHER_API_ROOT = 'https://www.metaweather.com/api';
const TODAY = new Date().toISOString().replace(/\-/g, '/').slice(0, 10); // YYYY/MM/DD
const DEFAULT_CITY = 'Kharkiv';

const httpGet = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let dataCollected = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => dataCollected += chunk);
            res.on('end', () => resolve(dataCollected));
            res.on('error', (e) => reject(e));
        });
    });
};

const fetchLocation = function* (locationName) {
    const [location] = JSON.parse(yield httpGet(`${WEATHER_API_ROOT}/location/search/?query=${locationName}`));
    return location;
};

const fetchWeather = function* (woeid, date) {
    return yield httpGet(`${WEATHER_API_ROOT}/location/${woeid}/${date}/`);
};

const subscribeForWeather = ({
    location = DEFAULT_CITY,
    date = TODAY,
    onWeatherFetched
}) => Rx.Observable.spawn(function* () {
    const city = yield fetchLocation(location);
    const weather = yield fetchWeather(city.woeid, date);
    return JSON.parse(weather)[0];
}).subscribe(
    onWeatherFetched,
    (e) => console.log('Error: %s', e),
    () => console.log('--- Weather fetch completed ---')
);

subscribeForWeather({
    onWeatherFetched: (weather) => console.log(weather)
});
