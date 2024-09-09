import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Hourly from './Pages/Hourly';
import Weekly from './Pages/Weekly';
import 'weather-icons/css/weather-icons.min.css';

import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('weekly');

  return (
    <div className="outer-container">
      <div className="device-frame">
        <NavBar currentView={currentView} setCurrentView={setCurrentView} />
        {currentView === 'hourly' && <Hourly />}
        {currentView === 'weekly' && <Weekly />}
      </div>
    </div>
  );
};

export default App;
