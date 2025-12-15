import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Favorites from './components/Favorites';
import { getCurrentWeather } from './services/weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);

  // Load theme and favorites from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('weatherTheme') || 'light';
    const savedCelsius = localStorage.getItem('isCelsius');
    const savedFavorites = localStorage.getItem('favorites');

    setTheme(savedTheme);
    if (savedCelsius !== null) {
      setIsCelsius(JSON.parse(savedCelsius));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    applyTheme(savedTheme);
  }, []);

  // Apply theme changes
  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    
    // Remove previous theme classes
    root.classList.remove('light', 'dark', 'neon');
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme === 'neon') {
      root.classList.add('dark', 'neon');
    }
    // light theme is default
  };

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('weatherTheme', newTheme);
    applyTheme(newTheme);
  };

  // Handle temperature unit toggle
  const handleTemperatureToggle = () => {
    const newCelsius = !isCelsius;
    setIsCelsius(newCelsius);
    localStorage.setItem('isCelsius', JSON.stringify(newCelsius));
  };

  // Handle weather search
  const handleSearch = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getCurrentWeather(city);
      setWeather(data);
      setCurrentCity(city);
      setError(null);
    } catch (err) {
      setError(`Unable to find weather for "${city}". Please try another city.`);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle add to favorites
  const handleAddFavorite = () => {
    if (!weather) return;

    const isFavorite = favorites.some((fav) => fav.name === weather.name);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.name !== weather.name));
    } else {
      const newFavorite = {
        name: weather.name,
        country: weather.sys.country,
        weather: {
          temp: weather.main.temp,
          icon: weather.weather[0].icon,
          condition: weather.weather[0].main,
        },
      };
      setFavorites([...favorites, newFavorite]);
    }
  };

  // Handle remove from favorites
  const handleRemoveFavorite = (cityName) => {
    setFavorites(favorites.filter((fav) => fav.name !== cityName));
  };

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Check if current weather is in favorites
  const isFavorite = weather && favorites.some((fav) => fav.name === weather.name);

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500 ${
      theme === 'light'
        ? 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
        : theme === 'neon'
        ? 'bg-gray-950 text-white'
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    }`}>
      {/* Neon background effects */}
      {theme === 'neon' && (
        <>
          <div className="fixed inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header
          theme={theme}
          onThemeChange={handleThemeChange}
          isCelsius={isCelsius}
          onTemperatureToggle={handleTemperatureToggle}
        />

        {/* Main Container */}
        <main className="py-8 sm:py-12 flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} isLoading={loading} />

            {/* Error Message */}
            {error && (
              <div className="w-full max-w-2xl mx-auto px-4 sm:px-0 animate-slideIn">
                <div className="glass-effect dark:glass-effect-dark border border-red-400/50 dark:border-red-500/50 rounded-lg p-4 text-red-700 dark:text-red-400 flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-semibold">Error</p>
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Current Weather */}
            {weather && (
              <>
                <CurrentWeather
                  weather={weather}
                  isCelsius={isCelsius}
                  onAddFavorite={handleAddFavorite}
                  isFavorite={isFavorite}
                />

                {/* Forecast */}
                <Forecast
                  lat={weather.coord.lat}
                  lon={weather.coord.lon}
                  isCelsius={isCelsius}
                  isLoading={loading}
                />
              </>
            )}

            {/* Favorites */}
            {favorites.length > 0 && (
              <Favorites
                favorites={favorites}
                onSelectCity={handleSearch}
                onRemoveFavorite={handleRemoveFavorite}
                isCelsius={isCelsius}
              />
            )}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
