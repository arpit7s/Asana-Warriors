import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Footer from './pages/Footer';
import { Login } from './Authentication/Login';
import { Register } from './Authentication/Register';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
