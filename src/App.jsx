import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing existing pages
import StartPage from './pages/StartPage/StartPage'; 
import LandingPage from './pages/LandingPage/LandingPage';

// Importing new components
import ChatbotPage from './pages/Chatbot/Chatbot.jsx';  // Chatbot page
import ExerciseRecommendationModal from './components/modals/ExerciseRecommendation/ExerciseRecommendationModal.jsx';  // Exercise Recommendation Modal
import DietRecommendationModal from './components/modals/DietRecommendation/DietRecommendation.jsx';  // Diet Recommendation Modal
import LifestyleRecommendationModal from './components/modals/LifestyleRecommendation/LifestyleRecommendationModal.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<StartPage />} />
        <Route path="/landing" element={<LandingPage />} />

        {/* New routes for DietRecommendationButton, ExerciseRecommendationButton, DietRecommendationModal, ExerciseRecommendationModal, and ChatbotPage */}
        <Route path="/diet-recommendation" element={<DietRecommendationModal />} />
        <Route path="/lifestyle-recommendation" element={<LifestyleRecommendationModal />} />
        <Route path="/exercise-recommendation" element={<ExerciseRecommendationModal />} />
        <Route path="/chatbot" element={<ChatbotPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
