const http = require('http');
const PORT = process.argv[2] || 3333;
const app = require('connect')();
const { getWeather, logger, faviconHandler } = require('./middlewares');

[faviconHandler, logger, getWeather].forEach((middleware) => app.use(middleware));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
