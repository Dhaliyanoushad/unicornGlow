import { useState } from "react";
import "./Input.css";

export default function Input() {
  const [mood, setMood] = useState("");
  const [healthIssue, setHealthIssue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const apiKey = "3d876392f19344c68769ee4002e9bceb"; // Replace with your actual Spoonacular API key
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${mood}&apiKey=${apiKey}&number=5`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results.length > 0) {
        setRecipes(
          data.results.map((recipe) => ({
            name: recipe.title,
            image: recipe.image,
            url: `https://spoonacular.com/recipes/${recipe.id}`,
            description: `This meal contains ingredients that may help with your ${mood} mood.`,
          }))
        );
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="recipes recipe-container">
      <h2>Find Recipes Based on Your Mood</h2>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          placeholder="Enter your mood (e.g., anxious, happy, stressed)"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          required
          className="input-box"
        />
        <input
          type="text"
          placeholder="Any health issues? (optional)"
          value={healthIssue}
          onChange={(e) => setHealthIssue(e.target.value)}
          className="input-box"
        />
        <button type="submit" className="submit-btn">
          Get Recipes
        </button>
      </form>

      {loading && <p>Loading recipes...</p>}

      {recipes.length > 0 && (
        <div className="recipe-results">
          <h3>Recommended Recipes:</h3>
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
              <h4>{recipe.name}</h4>
              <p>
                <strong>Why it helps:</strong> {recipe.description}
              </p>
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-link"
              >
                View Full Recipe
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
