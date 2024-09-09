// NavBar.jsx
import React from 'react';
import './NavBar.css';

const NavBar = ({ currentView, setCurrentView }) => {
  return (
    <nav className="navbar">
      <button 
        className={currentView === 'weekly' ? 'active' : ''}
        onClick={() => setCurrentView('weekly')}
      >
        Weekly
      </button>
      <button 
        className={currentView === 'hourly' ? 'active' : ''}
        onClick={() => setCurrentView('hourly')}
      >
        Hourly
      </button>
    </nav>
  );
};

export default NavBar;
