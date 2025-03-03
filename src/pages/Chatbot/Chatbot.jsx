import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './Chatbot.css';

const ChatbotPage = () => {
    const [latestPost, setLatestPosts] = useState(null);  // Start with null to differentiate from the empty state
    const [loading, setLoading] = useState(true);  // To track loading state
    const [error, setError] = useState(false);  // To track errors
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/query');  // Fetch data from backend
                const data = await response.json();
                console.log(data);

                if (response.ok && data && data.length > 0) {
                    setLatestPosts(data);  // Assuming the latest data is the first item in the response array
                } else {
                    setLatestPosts('No data available');  // If no data is available
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(true);  // Set error if the fetch fails
            } finally {
                setLoading(false);  // Set loading to false once the fetch process is complete
            }
        };

        fetchData();
    }, []);  // Run only once when the component is mounted

    // Function to process text: bold the text inside "**", add a newline before a number, but skip the number and period
    const processText = (text) => {
        const processedText = text.split(/(\*\*[^*]+\*\*|\d+\.)/).map((part, index) => {
            if (part && part.startsWith("**") && part.endsWith("**")) {
                // Remove the '**' and make it bold
                return <strong key={index} className="bold-text">{part.slice(2, -2)}</strong>;
            } else if (part && /\d+\./.test(part)) {
                // If it's a number followed by a period, add a newline but don't display the number or period
                return (
                    <React.Fragment key={index}>
                        <br />
                    </React.Fragment>
                );
            }
            // Default case: just return the part as it is
            return <span key={index}>{part}</span>;
        });

        return processedText;
    };

    // Display the appropriate message based on the states
    const displayContent = () => {
        if (loading) {
            return <span className="loading-text">Loading...</span>;  // Show loading state
        }
        if (error) {
            return <span className="error-text">Error fetching data</span>;  // Show error message
        }
        return <div className="content">{processText(latestPost)}</div>;  // Process and show the latest data if available
    };

    // Function to handle the navigation
    const handleRedirect = () => {
        navigate("/landing"); // Navigate to LandingPage
    };

    return (
        <div className="chatbot-container">
            <h1 className="chatbot-header">Chatbot Page</h1>
            <div className="content-box">
                {displayContent()}  {/* Render the appropriate content based on state */}
            </div>
            {/* Button to redirect to LandingPage */}
            <button className="redirect-button" onClick={handleRedirect}>
                Go to Landing Page
            </button>
        </div>
    );
};

export default ChatbotPage;
