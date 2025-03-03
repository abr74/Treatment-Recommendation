import React, { useState } from "react";
import './LifestyleRecommendationModal.css';
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LifestyleRecommendationModal = ({ isOpen, closeModal }) => {

    const [alcoholComsumption, setAlcoholComsumption] = useState('');
    const [smoking, setSmoking] = useState('');
    const [sleep_hours, setSleep_hours] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const alcohol = alcoholComsumption === '' ? 'I do drink' : `I drink ${alcoholComsumption} weekly`;
        const smoke = smoking === '' ? 'I do not smoke' : `I smoke ${smoking} weekly`;

        if (sleep_hours === '') {
            setIsEmpty(true);
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({query: `${alcohol}, ${smoke}, I sleep ${sleep_hours} daily. How should I improve my lifestyle`}),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Success:', responseData);
                navigate("/chatbot");
                closeModal();
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
                <span className='close' onClick={closeModal}>
                    &times;
                </span>
                <h2 className="modal-title">Lifestyle Recommendation</h2>
                <div className="modal-form">
                    <TextField 
                        id="alcoholConsumption"
                        label="Alcohol Consumption"
                        variant="standard"
                        value={alcoholComsumption}
                        onChange={(e) => setAlcoholComsumption(e.target.value)}
                        className="input-field"
                    />
                    <TextField 
                        id="smoking"
                        label="Smoking"
                        variant="standard"
                        value={smoking}
                        onChange={(e) => setSmoking(e.target.value)}
                        className="input-field"
                    />
                    <TextField 
                        id="sleep_hours"
                        label="Daily Sleep Hours"
                        variant="standard"
                        value={sleep_hours}
                        onChange={(e) => setSleep_hours(e.target.value)}
                        error={isEmpty}
                        helperText={isEmpty ? 'Sleep hours are required' : ''}
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

export default LifestyleRecommendationModal;
