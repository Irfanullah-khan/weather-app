import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length > 2) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearch = (city) => {
    setSearchTerm('');
    setShowSuggestions(false);
    setSuggestions([]);
    onSearch(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  const handleSuggestionClick = (city) => {
    handleSearch(city);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative">
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              placeholder="Search for a city..."
              className="w-full pl-12 pr-4 py-3 rounded-lg glass-effect dark:glass-effect-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-neon-blue"
            />
          </div>
          <button
            onClick={() => handleSearch(searchTerm)}
            disabled={!searchTerm || isLoading}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 glass-effect dark:glass-effect-dark rounded-lg shadow-lg z-10 animate-slideIn">
            {suggestions.map((city, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(city)}
                className="w-full px-4 py-2 text-left hover:bg-white/20 dark:hover:bg-white/10 flex items-center gap-2 text-gray-900 dark:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-cyan-500" />
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
