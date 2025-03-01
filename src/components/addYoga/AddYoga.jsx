import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";

// Firebase Realtime Database API URL
const API_URL =
  "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/yogas.json";

const AddYoga = () => {
  const navigate = useNavigate();

  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const { isDark } = useContext(ThemeContext);

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newYoga = {
      title,
      description,
      difficulty,
      imageUrl,
    };

    try {
      await axios.post(API_URL, newYoga);
      alert("Yoga pose added successfully!");
      navigate("/"); // Redirect to Home Page
    } catch (error) {
      console.error("Error adding yoga pose:", error);
      alert("Failed to add yoga pose.");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h2 style={styles.heading}>Add Yoga Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Yoga Title"
          style={styles.input}
          required
        />

        {/* Description Textarea */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          style={styles.textarea}
          rows="4"
          required
        ></textarea>

        {/* Difficulty Radio Buttons */}
        <div>
          <label style={styles.label}>Difficulty:</label>
          <div style={styles.radioContainer}>
            {[1, 2, 3, 4, 5].map((level) => (
              <label key={level} style={styles.radioLabel}>
                <input
                  type="radio"
                  value={level}
                  checked={difficulty === level}
                  onChange={() => setDifficulty(level)}
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Image URL Input */}
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter Image URL"
          style={styles.input}
          required
        />

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Add Yoga
        </button>
      </form>
    </div>
  );
};

// ✅ Basic CSS-in-JS Styles
const styles = {
  // container: {
  //   width: "400px",
  //   margin: "50px auto",
  //   padding: "20px",
  //   border: "1px solid #ccc",
  //   borderRadius: "8px",
  //   boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  //   backgroundColor: "#f9f9f9",
  // },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  textarea: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  label: {
    fontWeight: "bold",
  },
  radioContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "5px",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AddYoga;
