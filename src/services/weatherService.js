import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo_key'; // Replace with actual API key
const BASE_URL = 'https://api.openweathermap.org';

// Create axios instance
const weatherAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Get current weather data
export const getCurrentWeather = async (city) => {
  try {
    const response = await weatherAPI.get('/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw new Error(`Failed to fetch weather for ${city}`);
  }
};

// Get weather by coordinates (for 7-day forecast)
export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await weatherAPI.get('/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather by coordinates:', error);
    throw error;
  }
};

// Get 7-day forecast using OneCall API
export const get7DayForecast = async (lat, lon) => {
  try {
    const response = await weatherAPI.get('/data/3.0/onecall', {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
        exclude: 'minutely,hourly,alerts',
      },
    });
    return response.data;
  } catch (error) {
    // Fallback to 5-day forecast if OneCall is not available
    console.warn('OneCall API not available, using 5-day forecast fallback');
    return get5DayForecast(lat, lon);
  }
};

// Fallback: Get 5-day forecast
export const get5DayForecast = async (lat, lon) => {
  try {
    const response = await weatherAPI.get('/data/2.5/forecast', {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    // Transform 5-day forecast to match expected format
    const dailyForecasts = {};
    response.data.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toDateString();
      
      if (!dailyForecasts[dateKey]) {
        dailyForecasts[dateKey] = {
          dt: item.dt,
          temp: { day: item.main.temp, night: item.main.temp },
          weather: item.weather,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          wind_speed: item.wind.speed,
          clouds: item.clouds.all,
        };
      }
    });

    return {
      daily: Object.values(dailyForecasts).slice(0, 7),
      current: {
        temp: response.data.list[0].main.temp,
        humidity: response.data.list[0].main.humidity,
        pressure: response.data.list[0].main.pressure,
        wind_speed: response.data.list[0].wind.speed,
        weather: response.data.list[0].weather,
      },
    };
  } catch (error) {
    console.error('Error fetching 5-day forecast:', error);
    throw error;
  }
};

// Search cities by name
export const searchCities = async (query) => {
  try {
    const response = await weatherAPI.get('/geo/1.0/direct', {
      params: {
        q: query,
        appid: API_KEY,
        limit: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching cities:', error);
    throw error;
  }
};

export default weatherAPI;
