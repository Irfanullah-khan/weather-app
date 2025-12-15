import React from 'react';
import { Heart, X } from 'lucide-react';
import { convertTemperature, getWeatherIcon } from '../utils/weatherUtils';

const Favorites = ({ favorites, onSelectCity, onRemoveFavorite, isCelsius }) => {
  if (favorites.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-0 mt-8">
        <div className="glass-effect dark:glass-effect-dark rounded-2xl p-8 text-center text-gray-500 dark:text-gray-400">
          <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No favorite cities yet. Add one to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-0 mt-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
        Favorite Cities
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelectCity(city.name)}
            className="glass-effect dark:glass-effect-dark rounded-xl p-4 text-left hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-slideIn"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  {city.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{city.country}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFavorite(city.name);
                }}
                className="p-2 rounded-full hover:bg-red-500/20 text-red-500 transition-all opacity-0 group-hover:opacity-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {city.weather && (
              <div className="space-y-2">
                <div className="text-center">
                  <span className="text-5xl">
                    {getWeatherIcon(city.weather.icon)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {city.weather.condition}
                  </span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {convertTemperature(city.weather.temp, isCelsius)}°
                  </span>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
