import React, { useState, useRef, useEffect } from "react";
import { getGeminiResponse } from "./geminiApi";
import "./ChatBot.css";

const MentalHealthChatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = await getGeminiResponse(input);
    setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);

    setInput("");
  };

  // 🔹 Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      {/* 🌸 Title & Description */}
      <div className="chat-header">
        <h1>🌿 Serenity Chat</h1>
        <p>
          You're not alone. Talk freely about your thoughts, feelings, and
          worries. 💙
        </p>
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* 🔹 Invisible div for auto-scroll */}
      </div>

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
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default MentalHealthChatbot;
