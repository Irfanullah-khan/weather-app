# WeatherDash 🌦️ - Advanced Weather Dashboard

A beautiful, responsive weather dashboard application built with **React**, **Vite**, and **Tailwind CSS**. Features real-time weather data with stunning UI, multiple themes, and advanced functionality.

## 🎯 Features

### 🔍 Weather Search
- Search for any city worldwide
- Real-time weather data from OpenWeatherMap API
- Detailed weather information display
- Error handling with user-friendly messages

### 🌡️ Current Weather Display
- **Temperature**: Large, easy-to-read format
- **Weather Icons**: Dynamic emoji-based icons for different conditions
- **Feels Like**: Actual temperature perception
- **Humidity**: Percentage display
- **Wind Speed & Direction**: With compass directions (N, NE, E, etc.)
- **Pressure**: In millibars
- **Visibility**: Distance in kilometers
- **Cloud Coverage**: Percentage
- **Sunrise & Sunset Times**: Precise times with icons

### 📅 7-Day Forecast
- Daily weather predictions
- Day and night temperatures
- Weather conditions with icons
- Humidity levels
- Wind speeds
- Smooth horizontal scroll with arrow controls
- Hover effects and smooth animations

### ⭐ Favorite Cities
- Save your favorite cities with one click (💝)
- Quick access to frequently checked locations
- One-click search from favorites
- LocalStorage persistence
- Remove favorites anytime

### 🎨 Multiple Themes
- **Light Mode** ☀️ - Fresh, bright interface (default)
- **Dark Mode** 🌙 - Easy on the eyes for night use
- **Neon Mode** ⚡ - Vibrant cyberpunk aesthetic with glowing effects
- Theme preference saved to LocalStorage
- Smooth transitions between themes

### 🌡️ Temperature Units
- **Celsius** (°C) - Default
- **Fahrenheit** (°F) - Toggle anytime
- Preference saved to LocalStorage
- Affects all temperature displays including forecast

### 📱 Responsive Design
- Fully responsive for mobile, tablet, and desktop
- Optimized touch controls on mobile
- Adaptive layout and spacing
- Mobile-first approach

### ✨ Beautiful UI Elements
- **Glass Morphism Effect**: Modern frosted glass look
- **Gradient Backgrounds**: Dynamic color gradients
- **Smooth Animations**: Fade-in, slide-in, float effects
- **Hover Effects**: Interactive and responsive
- **Weather-based Colors**: UI colors change based on weather conditions

## 📋 Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3+
- **Icons**: Lucide React, React Icons
- **HTTP Client**: Axios
- **State Management**: React Hooks
- **Weather Data**: OpenWeatherMap API

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- OpenWeatherMap API Key (free tier available)

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd Weather
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Get your API Key**:
   - Visit [OpenWeatherMap API](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key
   - Copy the key (32 characters)

4. **Configure API Key**:
   - Open `.env.local`
   - Replace `your_api_key_here` with your actual OpenWeatherMap API key:
     ```
     VITE_WEATHER_API_KEY=your_actual_api_key_here
     ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open in browser**:
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)
   - The app will automatically reload on file changes (Hot Module Replacement)

## 📦 Project Structure

```
Weather/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Theme & temperature toggles
│   │   ├── SearchBar.jsx       # City search input
│   │   ├── CurrentWeather.jsx  # Current weather display
│   │   ├── Forecast.jsx        # 7-day forecast
│   │   └── Favorites.jsx       # Favorite cities management
│   ├── services/
│   │   └── weatherService.js   # OpenWeatherMap API integration
│   ├── utils/
│   │   └── weatherUtils.js     # Temperature conversion, icon mapping, formatting
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styling
│   ├── index.css               # Global styles & Tailwind directives
│   └── main.jsx                # Entry point
├── .env.local                  # API configuration (not in git)
├── .env.example                # Example configuration
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies
```

## 🎮 How to Use

### 1. **Search for Weather**
   - Type a city name in the search bar
   - Press Enter or click the Search button
   - View the current weather instantly

### 2. **Switch Temperature Units**
   - Click "°C" or "°F" in the header
   - All temperatures update immediately
   - Your preference is saved

### 3. **Change Theme**
   - Click the theme buttons in the header (☀️ / 🌙 / ⚡)
   - Watch the beautiful transition
   - Your choice is remembered

### 4. **Save Favorites**
   - Click the ❤️ heart icon in the weather card
   - City is added to your favorites list
   - Click again to remove from favorites

### 5. **Access Favorites**
   - Scroll down to the "Favorite Cities" section
   - Click any city to view its weather
   - Click the ✕ to remove from favorites

### 6. **View Forecast**
   - Scroll down past current weather
   - See 7-day forecast cards
   - Scroll left/right to see all days
   - Hover for smooth animations

## 🎨 Theme Details

### Light Mode
- Clean white background with blue accents
- Perfect for daytime use
- High contrast text for readability

### Dark Mode
- Dark background with subtle gradients
- Gentle on the eyes for extended use
- Blue accents pop nicely

### Neon Mode
- Dark background with glowing effects
- Cyberpunk aesthetic
- Cyan, purple, and pink color scheme
- Animated background orbs
- Extra visual flair

## 🌐 API Information

### OpenWeatherMap API
- **Free Tier**: Includes current weather and forecast
- **Rate Limit**: 60 calls/minute
- **Coverage**: Worldwide cities
- **Update Frequency**: Data updates every 10 minutes

### API Endpoints Used
- **Current Weather**: `/data/2.5/weather`
- **7-Day Forecast**: `/data/3.0/onecall` (with fallback to 5-day)
- **City Search**: `/geo/1.0/direct`

## 💾 Data Persistence

### LocalStorage
The app automatically saves to browser's LocalStorage:
- **Theme Preference**: Your selected theme (light/dark/neon)
- **Temperature Units**: Celsius or Fahrenheit preference
- **Favorite Cities**: Complete list of favorite cities with weather data

All data is stored client-side and never sent to servers (except API calls).

## 🔒 Environment Variables

```env
# Required
VITE_WEATHER_API_KEY=your_api_key_here

# Optional (defaults to OpenWeatherMap endpoints)
VITE_API_BASE_URL=https://api.openweathermap.org
```

## 🛠️ Available Scripts

```bash
# Development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (full width single column)
- **Tablet**: 641px - 1024px (optimized layout)
- **Desktop**: 1025px+ (full feature display)

## 🎯 Weather Icon Mapping

| Condition | Icon |
|-----------|------|
| Clear Sky | ☀️ 🌙 |
| Few Clouds | 🌤️ |
| Scattered/Broken Clouds | ☁️ |
| Rain | 🌧️ |
| Thunderstorm | ⛈️ |
| Snow | ❄️ |
| Mist/Fog | 🌫️ |

## 🚨 Error Handling

- Network errors are gracefully handled
- User-friendly error messages
- Automatic fallback from OneCall to 5-day forecast API
- Input validation for search

## 🎁 Bonus Features

- ✨ Smooth animations and transitions
- 🎨 Weather-based gradient colors
- 🌬️ Wind direction compass (N, NE, E, etc.)
- 📊 Advanced weather metrics (pressure, visibility)
- 🌅 Sunrise and sunset times
- 💾 Complete persistence with LocalStorage
- 📍 Geolocation-ready (can be added)
- 🔄 Real-time data updates

## 🐛 Troubleshooting

### API Key Issues
- Make sure your API key is correctly copied
- Check that it's in `.env.local`, not `.env`
- Wait a few minutes after creating the key

### No Weather Data
- Verify your API key is valid
- Check browser console for error messages
- Ensure city name is correct (e.g., "London, UK")

### Theme Not Persisting
- Check if localStorage is enabled in browser
- Clear browser cache and reload

### Forecast Not Loading
- Some API tiers don't include OneCall API
- App falls back to 5-day forecast automatically
- Check your API key permissions

## 📚 Resources

- [OpenWeatherMap Documentation](https://openweathermap.org/api)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 📝 Future Enhancements

- [ ] Geolocation auto-detect
- [ ] Multiple location comparison
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Interactive weather maps
- [ ] Air quality index
- [ ] UV index display
- [ ] Pollen levels
- [ ] PWA (Progressive Web App)
- [ ] Dark mode auto-schedule

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 💬 Support

If you encounter any issues:
1. Check the Troubleshooting section
2. Review the console for error messages
3. Verify your API key configuration
4. Check your internet connection

---

**Made with ❤️ using React, Vite, and Tailwind CSS**

Enjoy beautiful weather at your fingertips! ☀️🌦️⛈️

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
