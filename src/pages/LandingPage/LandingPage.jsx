// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import './LandingPage.css';  // Import your existing CSS styles
import logo from '../../logo.svg'; // Assuming logo is in the src folder
import DietRecommendationButton from "../../components/buttons/DietRecommendationButton/DietRecommendationButton";  // Import your buttons
import LifestyleRecommendationButton from "../../components/buttons/LifestyleRecommendationButton/LifestyleRecommendationButton";
import ExerciseRecommendationButton from "../../components/buttons/ExerciseRecommendationButton/ExerciseRecommendationButton";
import ChatBot from "../../components/buttons/OpenPromptButton/chatbot";  // Assuming this is the chatbot component

const LandingPage = () => {
  return (
    <div>
      {/* Video Background */}
      <video className="video-background" autoPlay loop muted>
        <source src="/videos/Palm_Trees_07___4K_res.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="landing-page">
        {/* Title and Logo Section */}
        <div className="title-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">Welcome to Our Service</h1>
        </div>

        {/* Button Section */}
        <div className="button-container">
          <DietRecommendationButton />
          <LifestyleRecommendationButton />
          <ExerciseRecommendationButton />
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
