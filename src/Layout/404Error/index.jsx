import React from 'react';
import './index.css';

const Index = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="error-button">Go Back Home</a>
      </div>
      <div className="error-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Index;