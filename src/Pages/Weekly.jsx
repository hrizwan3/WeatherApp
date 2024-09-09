import React from 'react';
import './Weekly.css';

const currentWeather = {
  temp: '79°F',
  condition: 'Sunny',
  icon: 'wi wi-day-sunny'
};

const weeklyData = [
  { day: 'Monday', low: '73°F', high: '85°F', condition: 'Sunny', icon: 'wi wi-day-sunny' },
  { day: 'Tuesday', low: '60°F', high: '71°F', condition: 'Cloudy', icon: 'wi wi-cloudy' },
  { day: 'Wednesday', low: '68°F', high: '76°F', condition: 'Rainy', icon: 'wi wi-rain' },
  { day: 'Thursday', low: '64°F', high: '78°F', condition: 'Partly Cloudy', icon: 'wi wi-day-cloudy' },
  { day: 'Friday', low: '58°F', high: '68°F', condition: 'Thunderstorm', icon: 'wi wi-thunderstorm' }
];

const Weekly = () => {
  return (
    <div className="weekly">
      <div className="current-weather">
        <i className={currentWeather.icon} style={{ fontSize: '80px' }}></i>
        <div className="current-temp">{currentWeather.temp}</div>
      </div>

      <div className="forecast">
        {weeklyData.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="day">{day.day}</div>
            <i className={day.icon} style={{ fontSize: '40px' }}></i>
            <div className="temp">
              <span>L: {day.low}</span>
              <span>H: {day.high}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weekly;
