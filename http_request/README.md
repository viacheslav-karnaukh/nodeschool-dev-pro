### HTTP request

#### Example of usage

```sh
# bash
node http_request
```

```javascript
// node
const { exec } = require('child_process');
exec('node http_request', (err, stdout, stderr) => console.log(stdout));
```

##### Result:
```javascript
{
  id: 6224664820973568,
  weather_state_name: 'Light Cloud',
  weather_state_abbr: 'lc',
  wind_direction_compass: 'NW',
  created: '2017-06-19T18:49:13.678990Z',
  applicable_date: '2017-06-19',
  min_temp: 16.77,
  max_temp: 26.66,
  the_temp: 25.5,
  wind_speed: 5.550339696174341,
  wind_direction: 320.39881212255017,
  air_pressure: 1005.72,
  humidity: 42,
  visibility: null,
  predictability: 70
}
--- Weather fetch completed ---
```
