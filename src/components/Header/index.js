import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;
