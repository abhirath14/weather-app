import axios from 'axios'
const URL = 'http://api.openweathermap.org/data/2.5/weather';
const appKey = 'd1560e4ef787bcf8046ee3012a8d08d3';

export async function getWeatherData (city) {
  var endpoint = `${URL}?q=${city}&APPID=${appKey}`;
  try {
    var data = await axios.get(endpoint);
    return data.data;
  } catch (err) {
    return err;
  }
}