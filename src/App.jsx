

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Services from './Services';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';




function App() {
  return (
    <Router>
    
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/services" element={<Services />} />
       
       
    

       
      
      
      
     </Routes>
    <Footer/>
   </Router>
  )
}

export default App