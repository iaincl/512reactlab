import React from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
function App() {
  return (
    <div className="app-container">
      <div className="status-bar">
        <p>9:41 AM</p>
        <div className="battery">
          <p>100%</p>
        </div>
      </div>
      <WeatherCard />
    </div>
  );
}

export default App;
