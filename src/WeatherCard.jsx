import React from 'react';
import './WeatherCard.css';

function WeatherCard() {
  return (
    <>    <div className="weather-card">
          <div className="weather-details">
              <p className="date">10:00 PM, Monday, 9 Sep</p>
              <p className="location">UPenn, PA</p>
              <div className="temperature-section">
                  <span className="temperature">19</span>
                  <span className="celsius">°C</span>
              </div>
              <p className="weather-status">Rainy Cloudy</p>
          </div>
          <img
              src="https://cdn-icons-png.flaticon.com/512/2204/2204338.png"
              alt="weather icon"
              className="weather-icon" />
     {}
      </div><div className="dress-card">
              <div className="weather-details">
              <p className="location">Outfit Suggestion:</p>
                  <div className="temperature-section">
                      <span className="temperature">Warmly</span>
                  </div>
                  <p className="weather-status">It is expected to be cold today</p>
              </div>
              <img
                  src="https://cdn-icons-png.freepik.com/512/614/614247.png"
                  alt="weather icon"
                  className="weather-icon" />
          </div>
          <div className="umbrella-card">
              <div className="weather-details">
              <p className="location">Umbrella?</p>
                  <div className="temperature-section">
                      <span className="temperature">YES</span>
                  </div>
                  <p className="weather-status">Please Bring an Umbrella today</p>
              </div>
              <img
                  src="	https://cdn-icons-png.freepik.com/512/570/570698.png"
                  alt="weather icon"
                  className="weather-icon" />
          </div>
          
          </>
    
  );
}

export default WeatherCard;
