import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";

import { Login } from "./Authentication/Login";
import { Register } from "./Authentication/Register";

import ContactForm from "./pages/ContactForm";
import AddYoga from "./components/addYoga/AddYoga";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="add-yoga" element={<AddYoga />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
