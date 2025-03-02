// src/pages/StartPage/StartPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './StartPage.css';  // Import the custom CSS for StartPage

const StartPage = () => {
  const navigate = useNavigate(); // Hook to navigate to the landing page

  // Function to navigate to the LandingPage when "Continue" is clicked
  const handleContinueClick = () => {
    navigate('/landing'); // Navigate to /landing route
  };

  return (
    <div className="start-page">
      {/* Video Background */}
      <video className="video-background" autoPlay loop muted>
        <source src="/videos/Palm_Trees_07___4K_res.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title and Logo Section */}
      <div className="title-container">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <h1 className="title">Welcome to Our Service</h1>
      </div>

      {/* Continue Button Section */}
      <div className="button-container">
        <button onClick={handleContinueClick}>Continue</button>
      </div>
    </div>
  );
};

export default StartPage;
