import React, { useState } from 'react';
import './PersonalDetailsModal.css';
import { Button, TextField } from '@mui/material';

const PersonalDetailsModal = ({isOpen, closeModal }) => {

    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [email, setEmail] = useState('');

    // const openModal = () => {
    //     setIsOpen(true);
    // }

    // const closeModal = () => {
    //     setIsOpen(false);
    // }

    // POST
    const handleSubmit = async () => {
        const userDetails = {
            name,
            weight,
            email,
        };

        // console.log(JSON.stringify(userDetails, null, 2));

        try {
            const response = await fetch('http://127.0.0.1:5000/storename', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });

            if (response.ok){
                const responseData = await response.json();
                console.log('Succes:', responseData);
                // setStoredData(responseData.stored_data);
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
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={closeModal}>
                    &times;
                </span>
                <TextField
                    id='name'
                    label='Name'
                    variant='standard'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id='weight'
                    label='Weight'
                    variant='standard'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <TextField
                    id='email'
                    label='Email'
                    variant='standard'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Submit button */}
                <Button variant='contained' onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default PersonalDetailsModal;