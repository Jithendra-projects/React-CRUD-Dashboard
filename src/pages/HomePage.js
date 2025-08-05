import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Home Page</h2>
      <button onClick={() => navigate('/display')}>View Users</button>
      <button onClick={() => navigate('/input')}>Input Data</button>
    </div>
  );
}

export default HomePage;
