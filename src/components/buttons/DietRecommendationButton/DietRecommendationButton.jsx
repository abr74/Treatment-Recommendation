import { Button } from "@mui/material";
import React, {useState} from "react";
import DietRecommendationModal from "../../modals/DietRecommendation/DietRecommendation";

const DietRecommendationButton = () => {

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
                Diet Recommendation
            </Button>

            <DietRecommendationModal isOpen={isModalOpen} closeModal={closeModal}/>
        </div>
    )
};

export default DietRecommendationButton;