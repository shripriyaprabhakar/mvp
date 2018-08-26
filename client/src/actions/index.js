import axios from 'axios';
import config from './config.js';

const API_KEY = config.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  console.log('req', request);
  return {
  	type: FETCH_WEATHER, 
  	payload: request
  };
}


// '88204c19252c861c9eb6eaedbafc84e1';