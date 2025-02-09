import React, { useState } from "react";
import { getGeminiResponse } from "./geminiApi";
import "./ChatBot.css";

const MentalHealthChatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = await getGeminiResponse(input);
    setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);

    setInput("");
  };

  return (
    <div className="chatbot chat-container">
      {/* 🌸 Title & Description */}
      <div className="chat-header">
        <h1>🌿 Serenity Chat</h1>
        <p>
          You're not alone. Talk freely about your thoughts, feelings, and
          worries. 💙
        </p>
      </div>

      {/* Chat Messages */}
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How are you feeling today? 💬"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
      </div>
    </div>
  );
};

export default MentalHealthChatbot;
