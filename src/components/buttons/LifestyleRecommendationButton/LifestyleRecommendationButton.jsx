import { Button } from "@mui/material";
import React, {useState} from "react";
import LifestyleRecommendationModal from "../../modals/LifestyleRecommendation/LifestyleRecommendationModal";
import './LifestyleRecommendationButton.css'

const LifestyleRecommendationButton = () => {

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
                Lifestyle Recommendation
            </Button>

            <LifestyleRecommendationModal isOpen={isModalOpen} closeModal={closeModal}/>
        </div>
    )
};

export default LifestyleRecommendationButton;