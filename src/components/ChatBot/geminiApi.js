import axios from "axios";

const API_KEY = "AIzaSyA7RPK-N1kJMIl62AiwKljUH6AD1qhKnzs";
const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export const getGeminiResponse = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}?key=${API_KEY}`, {
      contents: [{ role: "user", parts: [{ text: message }] }],
    });

    return (
      response.data.candidates[0]?.content?.parts[0]?.text ||
      "No response received."
    );
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Error communicating with AI.";
  }
};
