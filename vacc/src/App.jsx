import React from 'react';
import './App.css';
import NavBar from './Components/Landing/NavBar';
import Carousel from './Components/Landing/Carousel';
import VaxCount from './Components/Landing/VaxCount';
import ThreeSteps from './Components/Landing/ThreeSteps';
import LatestNews from './Components/Landing/LatestNews';
import FAQItem from './Components/FAQItem';
import Footer from './Components/Footer.jsx';
import DigiLockerLogin from './Components/DigiLockerLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ABHAInfo from './Components/Landing/ABHAInfo.jsx';
import FAQ from './Components/Landing/FAQ.jsx';


// const faqData = [
//   { question: "How do I book a vaccination appointment?", answer: "You can book an appointment online through our portal." },
//   { question: "Can I reschedule or cancel my appointment?", answer: "Yes, you can reschedule or cancel within 24 hours before your appointment." },
//   { question: "What documents do I need to bring on the day of vaccination?", answer: "You need to bring a valid ID and your appointment confirmation." },
//   { question: "Are there any side effects after vaccination?", answer: "Some mild side effects like fever and fatigue may occur." },
// ];

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
