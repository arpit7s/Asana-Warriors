import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Footer from './pages/Footer';
import ContactForm from './pages/ContactForm';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
