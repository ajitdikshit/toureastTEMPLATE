🌏 TOUREAST – Smart Tourism Companion (PWA)

TOUREAST is a Progressive Web App (PWA) designed to help travelers explore Eastern India and beyond.
It provides personalized recommendations, maps, weather updates, hotel listings, navigation, and AI-powered chatbot assistance, all in one place.

With PWA features, TOUREAST works online and offline, is installable on desktop & mobile, and delivers a native app-like experience straight from the browser.

✨ Features
🗺️ Smart Tourism

Explore tourist destinations, cultural sites, monuments, and scenic locations.

Results fetched dynamically using OpenTripMap API + Wikipedia API (fallback).

High-quality images from Unsplash API.

🏨 Hotel Integration

Find nearby hotels around a destination using OpenTripMap.

Interactive markers on the map for hotels.

Clicking on hotels can take users to third-party booking platforms.

📍 Interactive Map & Navigation

Built with Leaflet.js + OpenStreetMap tiles.

Real-time navigation route from the user’s location to the destination using OpenRouteService API.

Current location & destination both shown with markers.

Zooms out automatically to fit all markers.

🌦 Weather Forecast

Integrated with OpenWeatherMap API to provide 5-day forecasts for selected destinations.

🤖 AI Chatbot

Integrated OpenAI API for a chatbot travel assistant that answers queries and suggests plans.

🔐 Authentication

Secure sign-in & registration with Firebase Authentication.

User data stored with Firebase Firestore.

📆 Travel Planner

Calendar integration for planning trips.

Suggested itineraries & estimated costs.

📡 Connectivity Insights

Displays (randomized) internet connectivity rating at destination to give users an idea of network quality.

📲 PWA Features

Installable on desktop & mobile.

Works offline with cached assets (via sw.js Service Worker).

Fast loading thanks to manifest.json & caching strategy.

🛠️ Tech Stack

Frontend: HTML5, CSS3, JavaScript (Vanilla JS)

UI Styling: Custom CSS + minimal frameworks

Backend/Services: Firebase (Auth + Firestore)

Maps: Leaflet.js + OpenStreetMap

APIs:

OpenTripMap API (tourist places & hotels)

Wikipedia API (descriptions & fallback)

Unsplash API (images)

OpenWeatherMap API (weather forecast)

OpenRouteService API (routing & navigation)

AI: OpenAI API (chatbot assistant)

PWA: Service Worker (sw.js), Web App Manifest (manifest.json)

📂 Project Structure
TOUREAST/
│── index.html           # Homepage with search & recommendations
│── details.html         # Destination details + map, hotels, weather
│── travel.html          # Navigation & live route map
│── app.js               # Main app logic (search, cards, API calls)
│── details.js           # Handles place details, hotels, internet rating
│── travel.js            # Handles map navigation, routes, hotels
│── style.css            # App styling
│── sw.js                # Service Worker for caching
│── manifest.json        # PWA manifest file
│── /assets              # Icons, images, static assets

🚀 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/toureast.git
cd toureast

2️⃣ Install Dependencies

No heavy dependencies — just open the project in a browser.
(Optional: use a local server like VS Code Live Server or Python’s HTTP server)

# Using Python 3
python -m http.server 8000


Then visit:
👉 http://localhost:8000

3️⃣ Add Your API Keys

Open app.js, details.js, and travel.js, then replace placeholders with your API keys:

const openTripMapKey = "YOUR_OPENTRIPMAP_KEY";
const unsplashKey = "YOUR_UNSPLASH_KEY";
const openWeatherKey = "YOUR_OPENWEATHERMAP_KEY";
const orsKey = "YOUR_OPENROUTESERVICE_KEY";
const openaiKey = "YOUR_OPENAI_KEY";

4️⃣ Enable PWA

Ensure manifest.json is linked in index.html.

Register service worker sw.js inside index.html and details.html.

📱 Install as App (PWA)

Open the app in Chrome, Brave, or Edge.

Click the Install / Add to Home Screen prompt in the address bar.

On mobile, choose Add to Home Screen.

The app will now behave like a native mobile app 📲.


Homepage with recommendations

Destination details page (map + hotels + weather)

Travel navigation route

Chatbot interaction

🤝 Contributing

Fork the repository 🍴

Create a new branch (feature-new)

Commit changes (git commit -m "Added new feature")

Push to branch (git push origin feature-new)

Create a Pull Request 🎉

📜 License

You’re free to use, modify, and distribute with attribution.

👨‍💻 Author

Ajit Dikshit
🎓 Built as part of BTech AI learning projects & hobby development.
