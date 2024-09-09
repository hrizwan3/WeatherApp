import React from 'react';
import './Hourly.css';

const currentWeather = {
  temp: '79°F',
  condition: 'Sunny',
  icon: 'wi wi-day-sunny'
};

const hourlyData = [
  { time: '10:00 AM', temp: '72°F', condition: 'Sunny', icon: 'wi wi-day-sunny' },
  { time: '11:00 AM', temp: '71°F', condition: 'Sunny', icon: 'wi wi-day-sunny' },
  { time: '12:00 PM', temp: '71°F', condition: 'Sunny', icon: 'wi wi-day-sunny' },
  { time: '1:00 PM', temp: '70°F', condition: 'Cloudy', icon: 'wi wi-cloudy' },
  { time: '2:00 PM', temp: '68°F', condition: 'Rainy', icon: 'wi wi-rain' },
  { time: '3:00 PM', temp: '68°F', condition: 'Rainy', icon: 'wi wi-rain' },
];

const Hourly = () => {
  return (
    <div className="hourly">
      <div className="current-weather">
        <i className={currentWeather.icon} style={{ fontSize: '80px' }}></i>
        <div className="current-temp">{currentWeather.temp}</div>
      </div>

      <div className="hourly-forecast">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hourly-item">
            <div className="time">{hour.time}</div>
            <i className={hour.icon} style={{ fontSize: '40px' }}></i>
            <div className="temp">{hour.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hourly;
