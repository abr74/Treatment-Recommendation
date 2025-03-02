import React, { useEffect, useState } from "react";

const ChatbotPage = () => {
    const [latestPost, setLatestPosts] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/storename');  // Fetch all data from backend
                const data = await response.json();

                if (data.length > 0) {
                    setLatestPosts(data);  // Store all submissions
                } else {
                    setLatestPosts('');  // If no data found, set to an empty array
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);  // Fetch data once when the page loads

    return (
        <div>
            <h1>Chatbot Page</h1>
            
        </div>
    );
};

export default ChatbotPage;
