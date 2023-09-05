import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Soin from './pages/SoinEnergetique';
import Massage from './pages/MassageAyurvedique';



const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/soinEnergetique" element={<Soin />} />
            <Route path='/massageAyurvedique' element={<Massage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;


