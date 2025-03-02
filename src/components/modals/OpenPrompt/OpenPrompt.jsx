import React, { useState } from "react";
import './OpenPrompt.css';
import { Button, TextField } from "@mui/material";

const OpenPrompt = ({ isOpen, closeModal }) => {

    const [question, setQuestion] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const handleSubmit = async () => {

        if (question === '') {
            setIsEmpty(true);
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/storename', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(question),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Success:', responseData);
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
                <h2 className="modal-title">Ask Your Question</h2>
                <div className="modal-form">
                    <TextField 
                        id="question"
                        label="What is your question?"
                        variant="standard"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        error={isEmpty}
                        helperText={isEmpty ? 'Please ask a question' : ''}
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

export default OpenPrompt;
