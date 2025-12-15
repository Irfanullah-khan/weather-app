import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Gauge, Eye, Heart } from 'lucide-react';
import { convertTemperature, getWeatherIcon, formatSunTime, convertWindSpeed, getWindDirection } from '../utils/weatherUtils';

const CurrentWeather = ({ weather, isCelsius, onAddFavorite, isFavorite }) => {
  if (!weather) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        Search for a city to see the weather
      </div>
    );
  }

  const temp = convertTemperature(weather.main.temp, isCelsius);
  const tempUnit = isCelsius ? '°C' : '°F';
  const weatherCode = weather.weather[0].icon;
  const weatherIcon = getWeatherIcon(weatherCode);
  const windDir = getWindDirection(weather.wind.deg || 0);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-0 animate-fadeIn">
      {/* Main Weather Card */}
      <div className="glass-effect dark:glass-effect-dark rounded-3xl p-8 sm:p-12 mb-6 shadow-2xl">
        {/* Header with City and Favorite button */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {weather.name}, {weather.sys.country}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <button
            onClick={onAddFavorite}
            className={`p-3 rounded-full transition-all duration-300 ${
              isFavorite
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50'
                : 'glass-effect dark:glass-effect-dark text-gray-600 dark:text-gray-300 hover:text-pink-500'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Temperature Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-8">
            <div className="text-9xl animate-float">{weatherIcon}</div>
            <div>
              <div className="text-8xl font-bold text-gray-900 dark:text-white">
                {temp}
                <span className="text-5xl ml-2">{tempUnit}</span>
              </div>
              <p className="text-2xl text-gray-600 dark:text-gray-300 mt-4 capitalize">
                {weather.weather[0].main}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Feels like {convertTemperature(weather.main.feels_like, isCelsius)}{tempUnit}
              </p>
            </div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Humidity */}
          <div className="glass-effect dark:glass-effect-dark rounded-xl p-4 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-2">
              <Droplets className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Humidity</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{weather.main.humidity}%</p>
          </div>

          {/* Wind Speed */}
          <div className="glass-effect dark:glass-effect-dark rounded-xl p-4 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-2">
              <Wind className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Wind</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {convertWindSpeed(weather.wind.speed)} km/h
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{windDir}</p>
          </div>

          {/* Pressure */}
          <div className="glass-effect dark:glass-effect-dark rounded-xl p-4 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-2">
              <Gauge className="w-6 h-6 text-orange-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pressure</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{weather.main.pressure} mb</p>
          </div>

          {/* Visibility */}
          <div className="glass-effect dark:glass-effect-dark rounded-xl p-4 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-2">
              <Eye className="w-6 h-6 text-green-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Visibility</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{(weather.visibility / 1000).toFixed(1)} km</p>
          </div>

          {/* Cloud Cover */}
          <div className="glass-effect dark:glass-effect-dark rounded-xl p-4 text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-2">
              <Cloud className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Clouds</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{weather.clouds.all}%</p>
          </div>
        </div>

        {/* Sunrise & Sunset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/20 dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
              <Sun className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sunrise</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatSunTime(weather.sys.sunrise)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <Sun className="w-6 h-6 text-indigo-500 rotate-180" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sunset</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatSunTime(weather.sys.sunset)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
