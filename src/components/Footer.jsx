import React from 'react';
import { Github, Twitter, Linkedin, Heart, Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-t from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-900/40 backdrop-blur-md border-t border-white/20 dark:border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* About Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                <Cloud className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                WeatherDash
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your modern weather companion. Get accurate weather forecasts and stay prepared for any condition.
            </p>
          </div>

          {/* Connect Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/Irfanullah-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect dark:glass-effect-dark text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
          
              <a
                href="https://www.linkedin.com/in/irfanullah-khan-802605336/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect dark:glass-effect-dark text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              Weather data provided by{' '}
              <a
                href="https://openweathermap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 underline"
              >
                OpenWeatherMap
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {currentYear} WeatherDash. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              Made by <b>Irfanullah</b>  for weather enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
