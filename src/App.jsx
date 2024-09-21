import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/landingPage';
import AboutUs from './pages/aboutUs';
import Loan from './pages/loan';
import Contact from './pages/contactPage';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Faq from './pages/Fqa';
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage/>} />
          <Route path="about_us" element={<AboutUs/>} />
          <Route path="loan_page" element={<Loan/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="single_blog" element={<SingleBlog/>} />
          <Route path="faq" element={<Faq/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
