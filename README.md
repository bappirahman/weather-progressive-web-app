# Weather Progressive Web App 🌤️📱

A modern **Progressive Web App (PWA)** for weather information built with React, TypeScript, and Vite. Experience native app-like functionality with **offline support**, **installation capabilities**, and **lightning-fast performance** - all from your browser!

## 🚀 PWA Features & Capabilities

### 📱 **Install Anywhere**

- **One-click installation** on mobile devices, tablets, and desktops
- **Native app experience** - appears in your app drawer/start menu
- **No app store required** - install directly from your browser
- **Cross-platform compatibility** - works on iOS, Android, Windows, macOS, and Linux

### 🔥 **Offline-First Experience**

- **Complete offline functionality** - check weather even without internet
- **Smart caching** - automatically stores your recent weather searches
- **Seamless sync** - updates when connection is restored
- **Fallback content** - dedicated offline page when needed

### ⚡ **Performance Optimized**

- **Instant loading** - cached resources load immediately
- **Background updates** - fresh data syncs automatically
- **Minimal data usage** - efficient caching reduces bandwidth
- **Native-like animations** and smooth interactions

## ✨ Core Features

- 🌤️ **Real-time Weather Data**: Current conditions, temperature, humidity, and forecasts
- 📱 **Progressive Web App**: Full PWA with offline support and installation
- 🔄 **Service Worker**: Advanced caching for offline functionality
- 📲 **Installable**: Add to home screen on any device
- 🌐 **Offline Mode**: Access cached weather data without internet
- 🚀 **Fast Performance**: Optimized loading with Vite and smart caching
- 💪 **Type Safety**: Full TypeScript support for robust development
- 📐 **Responsive Design**: Perfect on mobile, tablet, and desktop
- � **Background Sync**: Updates data when connection returns
- 🎨 **Native Feel**: App-like experience with smooth transitions

## 🛠️ Tech Stack

- **React** - Modern UI framework with hooks
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Lightning-fast build tool and dev server
- **Axios** - HTTP client for API requests
- **Service Worker** - PWA backbone for caching and offline support
- **Web App Manifest** - Installation and native app behavior
- **Cache API** - Advanced offline data storage
- **Background Sync** - Data synchronization when online

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd weather-progressive-web-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   API_URL=https://api.openweathermap.org/data/2.5/weather
   API_KEY=your_openweathermap_api_key
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Experience PWA Features**
   - **Install the app**: Look for the install prompt or use browser menu
   - **Try offline mode**: Disable internet and see cached data
   - **Add to home screen**: Install like a native app

## 🌐 PWA Installation Guide

### 📱 **Mobile (iOS/Android)**

1. Open the app in your mobile browser
2. Look for the **"Add to Home Screen"** prompt
3. Tap **"Install"** or **"Add"**
4. Find the app icon on your home screen
5. Launch like any native app!

### 💻 **Desktop (Chrome/Edge/Safari)**

1. Open the app in your browser
2. Look for the **install icon** in the address bar (⊕ or ↓)
3. Click **"Install Weather App"**
4. Find it in your applications/start menu
5. Launch from desktop or taskbar!

### 🔧 **Manual Installation**

If you don't see the install prompt:

- **Chrome/Edge**: Menu → "Install Weather App"
- **Firefox**: Menu → "Install this site as an app"
- **Safari**: Share → "Add to Home Screen"

## API Integration

This app uses the OpenWeatherMap API to fetch weather data. You'll need to:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Add it to your `.env` file

## 🌐 Offline Capabilities

### 🔄 **How Offline Mode Works**

1. **First Visit**: App downloads and caches essential resources
2. **Data Caching**: Weather searches are automatically saved locally
3. **Offline Access**: View previously searched locations without internet
4. **Smart Updates**: New data syncs automatically when connection returns
5. **Fallback Pages**: Dedicated offline experience with helpful content

### 📊 **What Works Offline**

- ✅ View cached weather data for recent searches
- ✅ Browse previously visited locations
- ✅ Access app interface and navigation
- ✅ Install and launch the app
- ✅ Use all PWA features

### 🔁 **Background Sync**

- Automatically updates weather data when connection is restored
- Queues failed requests to retry when online
- Seamless transition between offline and online states

## 📱 Progressive Web App Features

- **🏠 App-like Experience**: Feels like a native mobile/desktop app
- **⚡ Instant Loading**: Resources cached for immediate startup
- **🔔 Push Notifications**: Stay updated with weather alerts (coming soon)
- **🎨 Theming**: Matches your system's dark/light mode preferences
- **🔐 Secure**: HTTPS required for all PWA features
- **📊 Analytics**: Track usage without compromising privacy
- **🔄 Auto-updates**: App updates automatically in the background

## 📁 Project Structure

```
src/
├── api/           # Weather API integration
│   └── fetWeather.ts
├── assets/        # Static assets and images
├── App.tsx        # Main React component
└── main.tsx       # Application entry point

public/
├── manifest.json  # 📱 PWA manifest (app metadata)
├── sw.js         # 🔄 Service worker (offline magic)
├── offline.html   # 🌐 Offline fallback page
└── images/        # App icons and assets
    ├── logo.svg
    └── weather-bg.jpg
```

### 🔑 **Key PWA Files**

- **`manifest.json`**: Defines app behavior, icons, and installation settings
- **`sw.js`**: Service worker handles caching, offline functionality, and background sync
- **`offline.html`**: Beautiful fallback page shown when content isn't cached

## Development Configuration

The project uses ESLint for code quality and consistency. The current setup includes:

- TypeScript ESLint rules for type safety
- React-specific linting rules
- Vite-optimized configuration

### Expanding ESLint Configuration

For production applications, consider enabling type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      ...tseslint.configs.recommendedTypeChecked,
      // For stricter rules (optional)
      ...tseslint.configs.strictTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- PWA features powered by service workers
