const createWeatherList = (weather) => `
<div>
    <img width="50" src="https://www.metaweather.com/static/img/weather/png/${weather['weather_state_abbr']}.png"/>
    <h3>Kharkiv weather</h3>
    <ul>
        <li>Date: ${weather['applicable_date']}</li>
        <li>Temperature: ${weather['the_temp']}C</li>
        <li>Humidity: ${weather['humidity']}</li>
        <li>Predictability: ${weather['predictability']}%</li>
    </ul>
<div>
`;

module.exports = createWeatherList;
