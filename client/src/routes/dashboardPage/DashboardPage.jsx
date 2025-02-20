import React, { useState, useEffect, useRef } from 'react';
import model from '../../lib/gemini';
import Markdown from "react-markdown";
import './dashboardPage.css';

const DashboardPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const endRef = useRef(null); 
  
  // Update scroll when messages change
  useEffect(() => {
    if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputText("");
    setIsLoading(true);

    try {
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      setMessages(prev => [...prev, { role: 'ai', content: response.text() }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            
            
            <div key={index} className={`message ${message.role}`}>
              {message.role === 'ai' ? (
                <Markdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p style={{ marginBottom: "12px", fontSize: "16px", lineHeight: "1.6" }} {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul style={{ paddingLeft: "25px", marginBottom: "12px" }} {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li style={{ marginBottom: "8px", fontSize: "16px", lineHeight: "1.5" }} {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px", marginBottom: "10px" }} {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "12px", marginBottom: "8px" }} {...props} />
                    ),
                  }}
                >
                  {message.content}
                </Markdown>
              ) : (
                <p style={{ fontSize: "16px", padding: "10px", lineHeight: "1.5" }}>{message.content}</p>
              )}
            </div>




          ))}
          {isLoading && <div className="loading">AI is thinking...</div>}
          {/* Invisible div for auto-scrolling */}
          <div ref={endRef}></div>
        </div>

        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask anything..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !inputText.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
