import React from 'react';
import { Cloud, Moon, Sun, Zap } from 'lucide-react';

const Header = ({ theme, onThemeChange, isCelsius, onTemperatureToggle }) => {
  return (
    <header className="w-full bg-gradient-to-b from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-900/40 backdrop-blur-md border-b border-white/20 dark:border-white/10 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="p-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300">
            <Cloud className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
            WeatherDash
          </h1>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Temperature Toggle */}
          <button
            onClick={onTemperatureToggle}
            className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg glass-effect dark:glass-effect-dark text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all font-semibold"
          >
            <span className="hidden sm:inline">Temperature:</span>
            <span className="font-bold text-cyan-500">
              {isCelsius ? '°C' : '°F'}
            </span>
          </button>

          {/* Theme Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-lg glass-effect dark:glass-effect-dark">
            <button
              onClick={() => onThemeChange('light')}
              title="Light Mode"
              className={`p-2 rounded-md transition-all ${
                theme === 'light'
                  ? 'bg-yellow-400 text-white shadow-lg shadow-yellow-400/50'
                  : 'text-gray-600 dark:text-gray-400 hover:text-yellow-500'
              }`}
            >
              <Sun className="w-5 h-5" />
            </button>

            <button
              onClick={() => onThemeChange('dark')}
              title="Dark Mode"
              className={`p-2 rounded-md transition-all ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
              }`}
            >
              <Moon className="w-5 h-5" />
            </button>

            <button
              onClick={() => onThemeChange('neon')}
              title="Neon Mode"
              className={`p-2 rounded-md transition-all ${
                theme === 'neon'
                  ? 'bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50'
                  : 'text-gray-600 dark:text-gray-400 hover:text-cyan-400'
              }`}
            >
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
