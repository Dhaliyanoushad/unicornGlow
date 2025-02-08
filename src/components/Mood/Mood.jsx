import React, { useState, useEffect } from "react";
import "./Mood.css";
import aiImage from "../../assets/aiImage2.webp"; // Replace with your AI-generated image

const Mood = ({ days }) => {
  const [mood, setMood] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [daysLeft, setDaysLeft] = useState(5); // Example: 5 days until next cycle
  const [selfCareTip, setSelfCareTip] = useState("");
  const [affirmation, setAffirmation] = useState("");

  const moodOptions = [
    {
      emoji: "😊",
      mood: "Happy",
      food: "Smoothie Bowl 🍓",
      activity: "Dancing 💃",
    },
    {
      emoji: "😔",
      mood: "Sad",
      food: "Dark Chocolate 🍫",
      activity: "Journaling 📖",
    },
    {
      emoji: "😴",
      mood: "Tired",
      food: "Nuts & Seeds 🥜",
      activity: "Taking a Nap 💤",
    },
    {
      emoji: "😡",
      mood: "Irritated",
      food: "Herbal Tea 🍵",
      activity: "Meditation 🧘",
    },
    {
      emoji: "🥰",
      mood: "Loving",
      food: "Fresh Fruits 🍉",
      activity: "Listening to Music 🎶",
    },
  ];

  const selfCareTips = [
    "Drink plenty of water 💧",
    "Stretch for 5 minutes 🧘",
    "Write down 3 things you're grateful for ✨",
    "Take a deep breath and relax 😌",
    "Go for a short walk outside 🌿",
  ];

  const affirmations = [
    "You are strong and capable 💪",
    "Your feelings are valid 💖",
    "You deserve rest and care 🌸",
    "You are beautiful inside and out ✨",
    "You are doing your best and that’s enough 💕",
  ];

  useEffect(() => {
    setSelfCareTip(
      selfCareTips[Math.floor(Math.random() * selfCareTips.length)]
    );
    setAffirmation(
      affirmations[Math.floor(Math.random() * affirmations.length)]
    );
  }, []);

  const handleMoodSelect = (mood) => {
    const selected = moodOptions.find((item) => item.mood === mood);
    setMood(selected.mood);
    setRecommendation(selected.food);
  };

  return (
    <div className="about">
      {/* AI Image */}
      <div className="about-left">
        <img src={aiImage} alt="Self-care illustration" className="aiImage" />
      </div>

      {/* Content Section */}
      <div className="about-right">
        <h3 className="fade-in">FOR YOU</h3>

        {/* Period Tracker */}
        <div className="cycle-tracker">
          <h4>Next Cycle in:</h4>
          <p className="days-left">{days} days</p>
        </div>

        {/* Mood Tracker */}
        <div className="mood-section">
          <h4 className="glow-text">How are you feeling today?</h4>
          <div className="mood-options">
            {moodOptions.map((option) => (
              <button
                key={option.mood}
                onClick={() => handleMoodSelect(option.mood)}
                className="emoji-btn"
              >
                {option.emoji}
              </button>
            ))}
          </div>
          {mood && (
            <p className="recommendation">
              You’re feeling **{mood}**. Try **{recommendation}** to feel
              better! 🥗
            </p>
          )}
        </div>

        {/* Self-Care Tip */}
        <div className="self-care">
          <h4>🌿 Self-Care Tip:</h4>
          <p>{selfCareTip}</p>
        </div>

        {/* Daily Affirmation */}
        <div className="affirmation">
          <h4>💖 Daily Affirmation:</h4>
          <p>"{affirmation}"</p>
        </div>
      </div>
    </div>
  );
};

export default Mood;
