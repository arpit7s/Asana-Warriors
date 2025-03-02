import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Home.css";

const API_URL = "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/yogas";

const Home = () => {
  const [yogas, setYogas] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingYoga, setEditingYoga] = useState(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetchYogas();
  }, []);

  const fetchYogas = async () => {
    try {
      const response = await axios.get(`${API_URL}.json`);
      if (response.data) {
        setYogas(Object.keys(response.data).map(key => ({ id: key, ...response.data[key] })));
      }
    } catch (error) {
      console.error("Error fetching yogas:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}.json`);
      fetchYogas();
    } catch (error) {
      console.error("Error deleting yoga pose:", error);
    }
  };

  const handleEdit = (yoga) => {
    setEditMode(true);
    setEditingYoga(yoga);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${editingYoga.id}.json`, editingYoga);
      setEditMode(false);
      setEditingYoga(null);
      fetchYogas();
    } catch (error) {
      console.error("Error updating yoga pose:", error);
    }
  };

  return (
    <div className={isDark ? "dark-container" : "light-container"}>
      <h1 className={isDark ? "dark-header" : "header"}>Yoga Poses</h1>

      {editMode && (
        <div className={isDark ? "dark-form" : "form-container"}>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                className={isDark ? "dark-input" : "form-input"}
                value={editingYoga.title}
                onChange={(e) => setEditingYoga({ ...editingYoga, title: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className={isDark ? "dark-input" : "form-textarea"}
                value={editingYoga.description}
                onChange={(e) => setEditingYoga({ ...editingYoga, description: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Image URL</label>
              <input
                type="url"
                className={isDark ? "dark-input" : "form-input"}
                value={editingYoga.imageUrl}
                onChange={(e) => setEditingYoga({ ...editingYoga, imageUrl: e.target.value })}
                required
              />
            </div>

            <div className="button-container">
              <button type="submit" className={isDark ? "dark-primary-button" : "primary-button"}>
                Update
              </button>
              <button type="button" onClick={() => setEditMode(false)} className="secondary-button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="yoga-grid">
        {yogas.map((yoga) => (
          <div key={yoga.id} className={isDark ? "dark-yoga-card" : "yoga-card"}>
            <img src={yoga.imageUrl} alt={yoga.title} className={isDark ? "dark-yoga-image" : "yoga-image"} />
            <div className="yoga-content">
              <h3 className="yoga-title">{yoga.title}</h3>
              <p className={isDark ? "dark-yoga-description" : "yoga-description"}>{yoga.description}</p>
              <div className="action-buttons">
                <button onClick={() => handleEdit(yoga)} className={isDark ? "dark-primary-button" : "primary-button"}>
                  Edit
                </button>
                <button onClick={() => handleDelete(yoga.id)} className="danger-button">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;