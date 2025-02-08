import React, { useState } from "react";
import "./MoodSongs.css"; // Import styles

const MoodSongs = () => {
  const [selectedMood, setSelectedMood] = useState("happy");
  const [favorites, setFavorites] = useState([]);

  // Predefined songs for each mood
  const moodSongs = {
    happy: [
      { name: "Happy – Pharrell Williams", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
      { name: "Can't Stop the Feeling – Justin Timberlake", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
    ],
    sad: [
      { name: "Someone Like You – Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
      { name: "Fix You – Coldplay", link: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
    ],
    anxious: [
      { name: "Weightless – Marconi Union", link: "https://www.youtube.com/watch?v=UfcAVejslrU" },
      { name: "Sunset Lover – Petit Biscuit", link: "https://www.youtube.com/watch?v=4uTNVumfm84" },
    ],
    energetic: [
      { name: "Titanium – David Guetta ft. Sia", link: "https://www.youtube.com/watch?v=JRfuAukYTKg" },
      { name: "Eye of the Tiger – Survivor", link: "https://www.youtube.com/watch?v=btPJPFnesV4" },
    ]
  };

  // Add song to favorites
  const addToFavorites = (song) => {
    if (!favorites.some((fav) => fav.name === song.name)) {
      setFavorites([...favorites, song]);
    }
  };

  return (
    <div className="mood-container">
      <h2>🎵 Pick a Mood 🎵</h2>
      <select onChange={(e) => setSelectedMood(e.target.value)} className="mood-select">
        {Object.keys(moodSongs).map((mood) => (
          <option key={mood} value={mood}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </option>
        ))}
      </select>

      <div className="song-list">
        <h3>Recommended Songs:</h3>
        <ul>
          {moodSongs[selectedMood].map((song, index) => (
            <li key={index} className="song-item">
              <a href={song.link} target="_blank" rel="noopener noreferrer">
                🎶 {song.name}
              </a>
              <button className="fav-button" onClick={() => addToFavorites(song)}>❤️</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="favorites-list">
        <h3>❤️ Your Favorites:</h3>
        <ul>
          {favorites.map((song, index) => (
            <li key={index} className="fav-song">
              <a href={song.link} target="_blank" rel="noopener noreferrer">
                {song.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodSongs;
