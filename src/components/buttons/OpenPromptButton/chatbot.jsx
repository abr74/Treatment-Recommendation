import { Button } from "@mui/material";
import React, {useState} from "react";
import OpenPrompt from "../../modals/OpenPrompt/OpenPrompt";
import './chatbot.css'

const ChatbotButton = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    
    return (
        <div>
            <Button variant="standard" onClick={openModal}>
                Ask me anything
            </Button>

            <OpenPrompt isOpen={isModalOpen} closeModal={closeModal}/>
        </div>
    )
};

export default ChatbotButton;