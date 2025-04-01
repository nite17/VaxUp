import React from 'react';
import './App.css';
import NavBar from './Components/Landing/NavBar';
import Carousel from './Components/Landing/Carousel';
import VaxCount from './Components/Landing/VaxCount';
import ThreeSteps from './Components/Landing/ThreeSteps';
import LatestNews from './Components/Landing/LatestNews';
import Footer from './Components/Landing/Footer.jsx';
import DigiLockerLogin from './Components/DigiLockerLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ABHAInfo from './Components/Landing/ABHAInfo.jsx';
import FAQ from './Components/Landing/FAQ.jsx';
import VaccinationImportance from './Components/Articles/VaccinationImportance.jsx';



function App() {
  return (
    <BrowserRouter>
      {/* Common layout elements that persist across routes */}
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Carousel />
              <VaxCount />
              <ThreeSteps />
              <LatestNews />
              <FAQ />
              <ABHAInfo />
              <Footer />
              
            </>
          }
        />
        {/* Login route */}
        <Route path="/login" element={<DigiLockerLogin />} />
        <Route path="/article/1" element={<VaccinationImportance />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
