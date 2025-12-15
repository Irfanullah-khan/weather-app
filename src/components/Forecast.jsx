import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getWeatherIcon, getDayName, convertTemperature } from '../utils/weatherUtils';
import { get7DayForecast } from '../services/weatherService';

const Forecast = ({ lat, lon, isCelsius, isLoading }) => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchForecast = async () => {
      try {
        setError(null);
        const data = await get7DayForecast(lat, lon);
        setForecast(data);
      } catch (err) {
        console.error('Error fetching forecast:', err);
        setError('Failed to fetch forecast data');
      }
    };

    fetchForecast();
  }, [lat, lon]);

  const handleScroll = (direction) => {
    const container = document.getElementById('forecast-container');
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!forecast) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
        <div className="glass-effect dark:glass-effect-dark rounded-2xl p-8 text-center text-gray-500 dark:text-gray-400">
          {error || 'Loading forecast...'}
        </div>
      </div>
    );
  }

  const dailyForecasts = forecast.daily || [];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-0 mt-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">7-Day Forecast</h2>
      
      {/* Forecast Container with scroll */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-16 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass-effect dark:glass-effect-dark text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Forecast Cards */}
        <div
          id="forecast-container"
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        >
          {dailyForecasts.slice(0, 7).map((day, index) => {
            const date = new Date(day.dt * 1000);
            const dayName = getDayName(day.dt);
            const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const dayTemp = convertTemperature(day.temp.day, isCelsius);
            const nightTemp = convertTemperature(day.temp.night, isCelsius);
            const tempUnit = isCelsius ? '°C' : '°F';
            const weatherCode = day.weather[0].icon;
            const weatherIcon = getWeatherIcon(weatherCode);
            const condition = day.weather[0].main;

            return (
              <div
                key={index}
                className="flex-shrink-0 w-52 sm:w-60 glass-effect dark:glass-effect-dark rounded-2xl p-6 snap-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                {/* Day and Date */}
                <div className="text-center mb-4">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{dayName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{dateStr}</p>
                </div>

                {/* Weather Icon */}
                <div className="text-center text-7xl mb-4 animate-float">{weatherIcon}</div>

                {/* Condition */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-4 capitalize">
                  {condition}
                </p>

                {/* Temperature Details */}
                <div className="space-y-3">
                  {/* Day Temperature */}
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-orange-400/10 to-red-400/10 dark:from-orange-500/20 dark:to-red-500/20">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Day</span>
                    <span className="font-bold text-gray-900 dark:text-white">{dayTemp}{tempUnit}</span>
                  </div>

                  {/* Night Temperature */}
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-blue-400/10 to-indigo-400/10 dark:from-blue-500/20 dark:to-indigo-500/20">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Night</span>
                    <span className="font-bold text-gray-900 dark:text-white">{nightTemp}{tempUnit}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-400 border-t border-white/20 dark:border-white/10 pt-3">
                  <div className="flex justify-between">
                    <span>💧 Humidity</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{day.humidity}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>💨 Wind</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{(day.wind_speed * 3.6).toFixed(1)} km/h</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-16 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass-effect dark:glass-effect-dark text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Forecast;
