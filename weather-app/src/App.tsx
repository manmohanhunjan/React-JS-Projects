import React, { useState } from "react";
import './App.css';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<string>('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f767a695fe8842e11f563041114151b6&units=metric`
      );
      const data = await response.json();
      setWeather(`Current temperature in ${city}: ${data.main.temp}°C`);
    } catch (error) {
      setWeather('City not found');
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-200 p-8 rounded shadow">
        <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          className="border p-2 rounded w-full mb-4"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-2 rounded"
          onClick={fetchWeather} 
        >
          Get Weather
        </button>
        <p className="mt-4">{weather}</p>
      </div>
    </div>
  );
};

export default App;
