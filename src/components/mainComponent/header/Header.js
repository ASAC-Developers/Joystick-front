import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <nav className="navMenu">
      <Link to="/">Home</Link>
      <Link to="/favGames">Favorite Games</Link>
      <Link to="/about">About</Link>
      {/* <div className="dot"></div> */}
    </nav>
  );
}

export default Header;
