import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <div style={styles.divider}></div>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.message}>
          Oops! The yoga pose you're looking for seems to have stretched beyond
          our reach.
        </p>
        <div style={styles.illustration}>
          <div style={styles.yogaFigure}>
            <div style={styles.head}></div>
            <div style={styles.body}></div>
            <div style={styles.armLeft}></div>
            <div style={styles.armRight}></div>
            <div style={styles.legLeft}></div>
            <div style={styles.legRight}></div>
          </div>
        </div>
        <button onClick={handleGoHome} style={styles.button}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    padding: "20px",
  },
  content: {
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "40px 30px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  errorCode: {
    fontSize: "120px",
    fontWeight: "700",
    color: "#4361ee",
    margin: "0",
    lineHeight: "1.2",
  },
  divider: {
    width: "60px",
    height: "4px",
    backgroundColor: "#4361ee",
    margin: "10px auto 20px",
    borderRadius: "2px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "600",
    color: "#2c3e50",
    margin: "0 0 20px",
  },
  message: {
    fontSize: "18px",
    color: "#5d6778",
    lineHeight: "1.6",
    margin: "0 0 30px",
  },
  illustration: {
    height: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  },
  yogaFigure: {
    position: "relative",
    width: "100px",
    height: "100px",
  },
  head: {
    position: "absolute",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#4361ee",
    top: "0",
    left: "35px",
  },
  body: {
    position: "absolute",
    width: "10px",
    height: "40px",
    backgroundColor: "#4361ee",
    top: "30px",
    left: "45px",
  },
  armLeft: {
    position: "absolute",
    width: "40px",
    height: "8px",
    backgroundColor: "#4361ee",
    top: "40px",
    left: "5px",
    transformOrigin: "right center",
    transform: "rotate(20deg)",
    borderRadius: "4px",
  },
  armRight: {
    position: "absolute",
    width: "40px",
    height: "8px",
    backgroundColor: "#4361ee",
    top: "40px",
    right: "5px",
    transformOrigin: "left center",
    transform: "rotate(-20deg)",
    borderRadius: "4px",
  },
  legLeft: {
    position: "absolute",
    width: "8px",
    height: "45px",
    backgroundColor: "#4361ee",
    top: "70px",
    left: "30px",
    transformOrigin: "top center",
    transform: "rotate(25deg)",
    borderRadius: "4px",
  },
  legRight: {
    position: "absolute",
    width: "8px",
    height: "45px",
    backgroundColor: "#4361ee",
    top: "70px",
    right: "30px",
    transformOrigin: "top center",
    transform: "rotate(-25deg)",
    borderRadius: "4px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#4361ee",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    margin: "10px 0",
  },
};

export default ErrorPage;
