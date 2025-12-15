# 🚀 Quick Setup Guide - WeatherDash

## Step 1: Get Your API Key ⚙️

1. Visit **https://openweathermap.org/api**
2. Click "Sign Up" and create a free account
3. Once logged in, go to your **API keys** section
4. Copy your **API Key** (looks like: `abc123def456...`)

## Step 2: Configure API Key 🔑

1. Open the `.env.local` file in the Weather folder
2. Replace `your_api_key_here` with your actual API key:
   ```
   VITE_WEATHER_API_KEY=your_actual_api_key_here
   ```
3. **Save the file** (Ctrl+S)

## Step 3: Start the App ▶️

The development server should already be running at:
```
http://localhost:5173
```

If it's not running, open PowerShell in the Weather folder and run:
```bash
npm run dev
```

## Step 4: Use the App 🎮

1. **Search**: Type any city name in the search box and press Enter
2. **See Weather**: Current weather displays with detailed info
3. **Save Favorites**: Click the ❤️ heart to save favorite cities
4. **Change Theme**: Click ☀️ (Light) / 🌙 (Dark) / ⚡ (Neon) buttons
5. **Switch Celsius/Fahrenheit**: Click the °C/°F button

## 📋 Features Checklist

✅ Real-time weather data
✅ 7-day forecast
✅ Favorite cities with LocalStorage
✅ Three beautiful themes (Light, Dark, Neon)
✅ Celsius/Fahrenheit toggle
✅ Fully responsive design
✅ Smooth animations
✅ Weather icons and emojis
✅ Sunrise/Sunset times
✅ Wind direction and speed
✅ Humidity, pressure, visibility

## 🆘 Troubleshooting

### "No weather data" or "API Error"
- Check that your API key is correctly pasted in `.env.local`
- Close and reopen the browser (hard refresh: Ctrl+Shift+R)
- Wait a few minutes if you just created the API key

### "Page not loading"
- Make sure the dev server is running (check terminal)
- Go to `http://localhost:5173` in your browser
- Check console for errors (F12)

### "Theme not saving"
- Check browser settings - LocalStorage might be disabled
- Try a different browser

## 💡 Tips

- Try searching for major cities like: London, New York, Tokyo, Paris, Sydney
- The neon theme looks best in dark environments
- Favorite cities sync across browser sessions
- Your theme preference and temperature unit are saved automatically

## 📚 Learn More

- See **README.md** for complete documentation
- Check **src/components/** for component code
- See **src/services/weatherService.js** for API integration

---

**Ready to use! Happy weather checking! 🌦️**
