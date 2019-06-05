import React from 'react';
import notFoundImg from '../../assets/img/404.jpg';
import './style.css';

function NotFoundPage() {
  return (
    <div className="not_found_page">
      <img src={notFoundImg} alt="404 Not Found!" />
    </div>
  );
}

export default NotFoundPage;
