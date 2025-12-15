// Map OpenWeatherMap weather codes to custom UI representations
export const getWeatherIcon = (weatherCode, isDayTime = true) => {
  const code = String(weatherCode);
  
  // Clear sky
  if (code === '01d') return '☀️';
  if (code === '01n') return '🌙';
  
  // Few clouds
  if (code === '02d' || code === '02n') return '🌤️';
  
  // Scattered/Broken clouds
  if (code === '03d' || code === '03n' || code === '04d' || code === '04n') return '☁️';
  
  // Rain
  if (code.includes('09') || code.includes('10')) return '🌧️';
  
  // Thunderstorm
  if (code.includes('11')) return '⛈️';
  
  // Snow
  if (code.includes('13')) return '❄️';
  
  // Mist/Fog
  if (code.includes('50')) return '🌫️';
  
  return '⛅';
};

// Get weather description
export const getWeatherDescription = (weatherCode) => {
  const descriptions = {
    '01d': 'Clear Sky',
    '01n': 'Clear Night',
    '02d': 'Few Clouds',
    '02n': 'Few Clouds',
    '03d': 'Scattered Clouds',
    '03n': 'Scattered Clouds',
    '04d': 'Broken Clouds',
    '04n': 'Broken Clouds',
    '09d': 'Shower Rain',
    '09n': 'Shower Rain',
    '10d': 'Rain',
    '10n': 'Rain',
    '11d': 'Thunderstorm',
    '11n': 'Thunderstorm',
    '13d': 'Snow',
    '13n': 'Snow',
    '50d': 'Mist',
    '50n': 'Mist',
  };
  
  return descriptions[weatherCode] || 'Unknown';
};

// Convert temperature
export const convertTemperature = (temp, isCelsius) => {
  if (isCelsius) {
    return Math.round(temp);
  }
  return Math.round((temp * 9) / 5 + 32);
};

// Get day name from timestamp
export const getDayName = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
};

// Format time
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Get weather color based on condition
export const getWeatherColor = (weatherCode) => {
  if (weatherCode.includes('01')) return 'from-blue-400 to-blue-600';
  if (weatherCode.includes('02') || weatherCode.includes('03')) return 'from-gray-400 to-gray-600';
  if (weatherCode.includes('04')) return 'from-gray-500 to-gray-700';
  if (weatherCode.includes('09') || weatherCode.includes('10')) return 'from-blue-500 to-blue-800';
  if (weatherCode.includes('11')) return 'from-purple-600 to-purple-900';
  if (weatherCode.includes('13')) return 'from-blue-200 to-blue-400';
  if (weatherCode.includes('50')) return 'from-gray-400 to-gray-600';
  return 'from-blue-400 to-blue-600';
};

// Format sunrise/sunset time
export const formatSunTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

// Get wind direction
export const getWindDirection = (degrees) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round((degrees % 360) / 22.5);
  return directions[index % 16];
};

// Convert wind speed (m/s to km/h or mph)
export const convertWindSpeed = (speed, isKmh = true) => {
  if (isKmh) {
    return (speed * 3.6).toFixed(1);
  }
  return (speed * 2.237).toFixed(1);
};
