import React, { useState } from "react";
import './DietRecommendation.css';
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom"; // To handle navigation

const DietRecommendationModal = ({ isOpen, closeModal }) => {
    const [allergies, setAllergies] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async () => {
        // Send allergies data to backend
        console.log(JSON.stringify({allergies}));

        try {
            const response = await fetch('http://127.0.0.1:5000/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({query: `I have ${ allergies } allergies. My height is ${height} cm and I weigh ${weight}. Give me a diet recommendation`}), // Send allergies data
            });


            if (response.ok) {
                const responseData = await response.json();
                console.log('Success:', responseData);

                // Redirect to Chatbot page after submission
                navigate("/chatbot");
                closeModal(); // Close the modal after submission
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <h2 className="modal-title">Diet Recommendation</h2>
                <div className="modal-form">
                    <TextField
                        id="allergies"
                        label="Allergies"
                        variant="standard"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        className="input-field"
                    />

                    <TextField
                        id="weight"
                        label="Weight"
                        variant="standard"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="input-field"
                    />

                    <TextField
                        id="height"
                        label="Height"
                        variant="standard"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="input-field"
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        className="submit-button"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DietRecommendationModal;
