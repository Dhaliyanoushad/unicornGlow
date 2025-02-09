import React, { useState } from "react";
import "./MoodSongs.css"; // Import styles

const MoodSongs = () => {
  const [selectedMood, setSelectedMood] = useState("happy");
  const [favorites, setFavorites] = useState([]);

  // Predefined songs for each mood
  const moodSongs = {
    happy: [
      {
        name: "Happy – Pharrell Williams",
        link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
      },
      {
        name: "Can't Stop the Feeling – Justin Timberlake",
        link: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
      },
      {
        name: "Walking on Sunshine – Katrina and the Waves",
        link: "https://www.youtube.com/watch?v=iPUmE-tne5U",
      },
      {
        name: "Good Vibrations – The Beach Boys",
        link: "https://www.youtube.com/watch?v=Eab_beh07HU",
      },
      {
        name: "Best Day of My Life – American Authors",
        link: "https://www.youtube.com/watch?v=Y66j_BUCBMY",
      },
    ],
    sad: [
      {
        name: "Someone Like You – Adele",
        link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
      },
      {
        name: "Fix You – Coldplay",
        link: "https://www.youtube.com/watch?v=k4V3Mo61fJM",
      },
      {
        name: "Let Her Go – Passenger",
        link: "https://www.youtube.com/watch?v=RBumgq5yVrA",
      },
      {
        name: "The Night We Met – Lord Huron",
        link: "https://www.youtube.com/watch?v=KtlgYxa6BMU",
      },
      {
        name: "Hurt – Johnny Cash",
        link: "https://www.youtube.com/watch?v=vt1Pwfnh5pc",
      },
    ],
    anxious: [
      {
        name: "Weightless – Marconi Union",
        link: "https://www.youtube.com/watch?v=UfcAVejslrU",
      },
      {
        name: "Sunset Lover – Petit Biscuit",
        link: "https://www.youtube.com/watch?v=4uTNVumfm84",
      },
      {
        name: "Breathe Me – Sia",
        link: "https://www.youtube.com/watch?v=ghPcYqn0p4Y",
      },
      {
        name: "River Flows in You – Yiruma",
        link: "https://www.youtube.com/watch?v=7maJOI3QMu0",
      },
      {
        name: "Clair de Lune – Debussy",
        link: "https://www.youtube.com/watch?v=CvFH_6DNRCY",
      },
    ],
    energetic: [
      {
        name: "Titanium – David Guetta ft. Sia",
        link: "https://www.youtube.com/watch?v=JRfuAukYTKg",
      },
      {
        name: "Eye of the Tiger – Survivor",
        link: "https://www.youtube.com/watch?v=btPJPFnesV4",
      },
      {
        name: "Stronger – Kanye West",
        link: "https://www.youtube.com/watch?v=PsO6ZnUZI0g",
      },
      {
        name: "Uptown Funk – Mark Ronson ft. Bruno Mars",
        link: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
      },
      {
        name: "Don't Stop Me Now – Queen",
        link: "https://www.youtube.com/watch?v=HgzGwKwLmgM",
      },
    ],
    romantic: [
      {
        name: "Perfect – Ed Sheeran",
        link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
      },
      {
        name: "All of Me – John Legend",
        link: "https://www.youtube.com/watch?v=450p7goxZqg",
      },
      {
        name: "Thinking Out Loud – Ed Sheeran",
        link: "https://www.youtube.com/watch?v=lp-EO5I60KA",
      },
      {
        name: "A Thousand Years – Christina Perri",
        link: "https://www.youtube.com/watch?v=rtOvBOTyX00",
      },
      {
        name: "Endless Love – Diana Ross & Lionel Richie",
        link: "https://www.youtube.com/watch?v=JM_R1R28kLM",
      },
    ],
    relaxing: [
      {
        name: "Bluebird – Alexis Ffrench",
        link: "https://www.youtube.com/watch?v=Jd1hzzGfKPo",
      },
      {
        name: "Bloom – The Paper Kites",
        link: "https://www.youtube.com/watch?v=z3u7HZBlb6o",
      },
      {
        name: "Beyond – Leon Bridges",
        link: "https://www.youtube.com/watch?v=UKSerbZhJNE",
      },
      {
        name: "Gravity – John Mayer",
        link: "https://www.youtube.com/watch?v=Fo4746xIWZ8",
      },
      {
        name: "Banana Pancakes – Jack Johnson",
        link: "https://www.youtube.com/watch?v=OkyrIRyrRdY",
      },
    ],
    nostalgic: [
      {
        name: "Yesterday – The Beatles",
        link: "https://www.youtube.com/watch?v=NrgmdOz227I",
      },
      {
        name: "Time After Time – Cyndi Lauper",
        link: "https://www.youtube.com/watch?v=VdQY7BusJNU",
      },
      {
        name: "Hotel California – Eagles",
        link: "https://www.youtube.com/watch?v=5Gu4oPFp5B0",
      },
      {
        name: "Stairway to Heaven – Led Zeppelin",
        link: "https://www.youtube.com/watch?v=QkF3oxziUI4",
      },
      {
        name: "Dust in the Wind – Kansas",
        link: "https://www.youtube.com/watch?v=tH2w6Oxx0kQ",
      },
    ],
    hopeful: [
      {
        name: "Imagine – John Lennon",
        link: "https://www.youtube.com/watch?v=YkgkThdzX-8",
      },
      {
        name: "What a Wonderful World – Louis Armstrong",
        link: "https://www.youtube.com/watch?v=CWzrABouyeE",
      },
      {
        name: "Rise Up – Andra Day",
        link: "https://www.youtube.com/watch?v=lwgr_IMeEgA",
      },
      {
        name: "The Climb – Miley Cyrus",
        link: "https://www.youtube.com/watch?v=NG2zyeVRcbs",
      },
      {
        name: "Beautiful Day – U2",
        link: "https://www.youtube.com/watch?v=co6WMzDOh1o",
      },
    ],
    adventurous: [
      {
        name: "Born to Run – Bruce Springsteen",
        link: "https://www.youtube.com/watch?v=IxuThNgl3YA",
      },
      {
        name: "Go Your Own Way – Fleetwood Mac",
        link: "https://www.youtube.com/watch?v=6ul-cZyuYq4",
      },
      {
        name: "Roar – Katy Perry",
        link: "https://www.youtube.com/watch?v=CevxZvSJLk8",
      },
      {
        name: "Run the World – Beyoncé",
        link: "https://www.youtube.com/watch?v=VBmMU_iwe6U",
      },
      {
        name: "Wake Me Up – Avicii",
        link: "https://www.youtube.com/watch?v=IcrbM1l_BoI",
      },
    ],
    calming: [
      {
        name: "Ocean Eyes – Billie Eilish",
        link: "https://www.youtube.com/watch?v=viimfQi_pUw",
      },
      {
        name: "Holocene – Bon Iver",
        link: "https://www.youtube.com/watch?v=TWcyIpul8OE",
      },
      {
        name: "Bloom – Troye Sivan",
        link: "https://www.youtube.com/watch?v=41PTANtZFW0",
      },
      {
        name: "Skinny Love – Birdy",
        link: "https://www.youtube.com/watch?v=aNzCDt2eidg",
      },
      {
        name: "Turning Page – Sleeping at Last",
        link: "https://www.youtube.com/watch?v=EIZk1ZKnueI",
      },
    ],
    empowering: [
      {
        name: "Fight Song – Rachel Platten",
        link: "https://www.youtube.com/watch?v=xo1VInw-SKc",
      },
      {
        name: "Confident – Demi Lovato",
        link: "https://www.youtube.com/watch?v=cwLRQn61oUY",
      },
      {
        name: "Runaway – Galantis",
        link: "https://www.youtube.com/watch?v=GQK9Y_jVQoI",
      },
      {
        name: "Survivor – Destiny's Child",
        link: "https://www.youtube.com/watch?v=Wmc8bQoL-J0",
      },
      {
        name: "We Will Rock You – Queen",
        link: "https://www.youtube.com/watch?v=-tJYN-eG1zk",
      },
    ],
  };

  // Add song to favorites
  const addToFavorites = (song) => {
    if (!favorites.some((fav) => fav.name === song.name)) {
      setFavorites([...favorites, song]);
    }
  };

  // Remove song from favorites
  const removeFromFavorites = (song) => {
    setFavorites(favorites.filter((fav) => fav.name !== song.name));
  };

  return (
    <div className="listen mood-container">
      <h2>🎵 Pick a Mood 🎵</h2>
      <select
        onChange={(e) => setSelectedMood(e.target.value)}
        className="mood-select"
      >
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
              <button
                className="fav-button"
                onClick={() => addToFavorites(song)}
              >
                ❤️ Add to Favorites
              </button>
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
              <button
                className="remove-button"
                onClick={() => removeFromFavorites(song)}
              >
                🗑️ Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodSongs;
