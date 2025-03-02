import { Button } from "@mui/material";
import React, {useState} from "react";
import './ExerciseRecommendationButton.css'
import ExerciseRecommendationModal from "../../modals/ExerciseRecommendation/ExerciseRecommendationModal";

const ExerciseRecommendationButton = () => {

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
                Exercise Recommendation
            </Button>

            <ExerciseRecommendationModal isOpen={isModalOpen} closeModal={closeModal}/>
        </div>
    )
};

export default ExerciseRecommendationButton;