import React, { useState } from "react";
import './ExerciseRecommendationModal.css';
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation

const ExerciseRecommendationModal = ({ isOpen, closeModal }) => {

    const [goal, setGoal] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [duration, setDuration] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async () => {
        if (weight === '' || age === '' || goal === '' || duration === '') {
            setIsEmpty(true);
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/storename', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(`I am ${age} years old and weigh ${weight} pounds. My goal is to reach ${goal} pounds within ${duration} weeks. Create an exercise plan for me.`),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Success:', responseData);

                // Redirect to the chatbot page after form submission
                navigate("/chatbot");
                closeModal();  // Close the modal after submission
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
                <h2 className="modal-title">Exercise Recommendation</h2>
                <div className="modal-form">
                    <TextField 
                        id="age"
                        label="Age"
                        variant="standard"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        error={isEmpty}
                        helperText={isEmpty ? 'Required' : ''}
                        className="input-field"
                    />
                    <TextField 
                        id="weight"
                        label="Current Weight"
                        variant="standard"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        error={isEmpty}
                        helperText={isEmpty ? 'Required' : ''}
                        className="input-field"
                    />
                    <TextField 
                        id="goal"
                        label="Weight Goal"
                        variant="standard"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        error={isEmpty}
                        helperText={isEmpty ? 'Required' : ''}
                        className="input-field"
                    />
                    <TextField 
                        id="duration"
                        label="Duration (Weeks)"
                        variant="standard"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        error={isEmpty}
                        helperText={isEmpty ? 'Required' : ''}
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

export default ExerciseRecommendationModal;
