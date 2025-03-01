import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

// Firebase Realtime Database API URL
const API_URL =
  "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/yogas";

const Home = () => {
  const [yogas, setYogas] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingYoga, setEditingYoga] = useState(null);
  const { isDark, setIsDark, toggleTheme } = useContext(ThemeContext);

  // ✅ Fetch Yoga Poses from Firebase
  const fetchYogas = async () => {
    try {
      const response = await axios.get(`${API_URL}.json`);
      const data = response.data;

      if (data) {
        const yogaList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setYogas(yogaList);
      }
    } catch (error) {
      console.error("Error fetching yogas:", error);
    }
  };

  // ✅ Delete a Yoga Pose
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}.json`);
      alert("Yoga pose deleted successfully!");
      fetchYogas(); // Refresh list
    } catch (error) {
      console.error("Error deleting yoga pose:", error);
      alert("Failed to delete yoga pose.");
    }
  };

  // ✅ Edit a Yoga Pose - Populate Form for Editing
  const handleEdit = (yoga) => {
    setEditMode(true);
    setEditingYoga(yoga);
    // Scroll to top when editing
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Handle Edit Form Submission
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/${editingYoga.id}.json`, {
        title: editingYoga.title,
        description: editingYoga.description,
        difficulty: editingYoga.difficulty,
        imageUrl: editingYoga.imageUrl,
      });

      alert("Yoga pose updated successfully!");
      setEditMode(false);
      setEditingYoga(null);
      fetchYogas(); // Refresh list
    } catch (error) {
      console.error("Error updating yoga pose:", error);
      alert("Failed to update yoga pose.");
    }
  };

  // Fetch yoga poses on component mount
  useEffect(() => {
    fetchYogas();
  }, []);

  // Function to render difficulty stars
  const renderDifficultyStars = (difficulty) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= difficulty ? "#FFD700" : "#e0e0e0",
            fontSize: "18px",
            marginRight: "2px",
          }}
        >
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1 style={styles.heading}>Yoga Poses</h1>

      {/* ✅ Edit Form (Only Visible in Edit Mode) */}
      {editMode && (
        <div style={styles.editForm}>
          <h3 style={styles.editFormTitle}>Edit Yoga Pose</h3>
          <form onSubmit={handleUpdate} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Title</label>
              <input
                type="text"
                value={editingYoga.title}
                onChange={(e) =>
                  setEditingYoga({ ...editingYoga, title: e.target.value })
                }
                placeholder="Enter Yoga Title"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Description</label>
              <textarea
                value={editingYoga.description}
                onChange={(e) =>
                  setEditingYoga({
                    ...editingYoga,
                    description: e.target.value,
                  })
                }
                placeholder="Enter Description"
                style={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Image URL</label>
              <input
                type="url"
                value={editingYoga.imageUrl}
                onChange={(e) =>
                  setEditingYoga({ ...editingYoga, imageUrl: e.target.value })
                }
                placeholder="Enter Image URL"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Difficulty</label>
              <select
                value={editingYoga.difficulty}
                onChange={(e) =>
                  setEditingYoga({ ...editingYoga, difficulty: e.target.value })
                }
                style={styles.select}
                required
              >
                <option value="1">1 - Very Easy</option>
                <option value="2">2 - Easy</option>
                <option value="3">3 - Moderate</option>
                <option value="4">4 - Difficult</option>
                <option value="5">5 - Very Difficult</option>
              </select>
            </div>

            <div style={styles.buttonGroup}>
              <button type="submit" style={styles.button}>
                Update Yoga
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ✅ List of Yoga Poses */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
          gap: "25px",
          padding: "20px 0",
          //   border: "2px solid green",
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        {yogas.length > 0 ? (
          yogas.map((yoga) => (
            <div
              key={yoga.id}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#fff",
                height: "100%",
                // border: "2px solid green",
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src={yoga.imageUrl}
                  alt={yoga.title}
                  style={styles.image}
                />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{yoga.title}</h3>
                <p style={styles.cardDescription}>{yoga.description}</p>
                <div style={styles.difficultyContainer}>
                  <span style={styles.difficultyLabel}>Difficulty: </span>
                  <div style={styles.stars}>
                    {renderDifficultyStars(yoga.difficulty)}
                  </div>
                </div>

                {/* Edit & Delete Buttons */}
                <div style={styles.cardActions}>
                  <button
                    onClick={() => handleEdit(yoga)}
                    style={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(yoga.id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noContent}>No Yoga Poses Available</p>
        )}
      </div>
    </div>
  );
};

// ✅ CSS-in-JS Styles
const styles = {
  //   container: {
  //     maxWidth: "1200px",
  //     width: "100%",
  //     margin: "40px auto",
  //     padding: "30px",
  //     borderRadius: "12px",
  //     boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  //     backgroundColor: "#ffffff",
  //     fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  //     backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
  //     color: isDark ? "#ffffff" : "#000000",
  //   },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    color: "#333",
    fontWeight: "600",
    borderBottom: "2px solid #f0f0f0",
    paddingBottom: "15px",
  },
  //   yogaGrid: {
  //     display: "grid",
  //     gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
  //     gap: "25px",
  //     padding: "20px 0",
  //     border: "2px solid green",
  //   },
  //   yogaCard: {
  //     display: "flex",
  //     flexDirection: "column",
  //     borderRadius: "10px",
  //     overflow: "hidden",
  //     boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  //     transition: "transform 0.3s ease, box-shadow 0.3s ease",
  //     backgroundColor: "#fff",
  //     height: "100%",
  //     border: "2px solid green",
  //   },
  imageContainer: {
    position: "relative",
    height: "220px",
    overflow: "hidden",
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  cardContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#2c3e50",
    marginTop: "0",
    marginBottom: "12px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#5d6778",
    lineHeight: "1.6",
    marginBottom: "15px",
    flexGrow: 1,
  },
  difficultyContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  difficultyLabel: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#444",
    marginRight: "8px",
  },
  stars: {
    display: "flex",
  },
  cardActions: {
    display: "flex",
    gap: "10px",
    marginTop: "auto",
  },
  editButton: {
    flex: 1,
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "15px",
    transition: "background-color 0.2s ease",
  },
  deleteButton: {
    flex: 1,
    padding: "10px 15px",
    backgroundColor: "#F44336",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "15px",
    transition: "background-color 0.2s ease",
  },
  editForm: {
    backgroundColor: "#f8f9fa",
    padding: "25px",
    marginBottom: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    border: "1px solid #e9ecef",
  },
  editFormTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginTop: "0",
    marginBottom: "20px",
    color: "#2c3e50",
    borderBottom: "2px solid #e9ecef",
    paddingBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#444",
  },
  input: {
    padding: "12px 15px",
    border: "1px solid #dde2e5",
    borderRadius: "6px",
    fontSize: "16px",
    transition: "border-color 0.2s ease",
    outline: "none",
  },
  textarea: {
    padding: "12px 15px",
    border: "1px solid #dde2e5",
    borderRadius: "6px",
    fontSize: "16px",
    transition: "border-color 0.2s ease",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
  },
  select: {
    padding: "12px 15px",
    border: "1px solid #dde2e5",
    borderRadius: "6px",
    fontSize: "16px",
    backgroundColor: "white",
    outline: "none",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    flex: 1,
    padding: "12px 15px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4361ee",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  cancelButton: {
    flex: 1,
    padding: "12px 15px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#6c757d",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  noContent: {
    gridColumn: "1 / -1",
    textAlign: "center",
    fontSize: "18px",
    color: "#6c757d",
    padding: "40px 0",
  },
};

export default Home;
