import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (

<div className="fixed right-6 bottom-6" onClick={toggleTheme} >

<button type="button" className="my-button">
        {theme === 'light' ? <MdSunny size={20} /> : <FaMoon size={20} />}
      </button>
</div>
    
      
    );
  };

export default ThemeToggle;
