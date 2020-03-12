import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
  const [values, setValues, darkCheck] = useDarkMode('darkMode', false)
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={() => setValues(!values)}
          className={values ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
