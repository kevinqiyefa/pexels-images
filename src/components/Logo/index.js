import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo">
      <Link to="/">Home</Link>
    </div>
  );
}

export default Logo;
