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
import Dashboard from './Components/Dashboard/dashboard.jsx';
import { Patient } from './Components/Dashboard/profile.jsx';

const john = new Patient(
  1, // id
  "John Doe", // name
  7, // totalVaccinations
  [  // pendingVaccinations 
    { id: 101, vaccine: "Flu Booster Shot", desc: "Booster Shot", due: "2 months" }
  ],
  [  // familyMembers
    { id: 2, name: "Jane Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jake Doe" }
  ],
  [  // appointments
    { id: 101, vaccine: "COVID-19 Booster", date: "2025-04-10", time: "10:30 AM", location: "City Health Center", doctor: "Dr. Smith" }
  ],
  [  // history
    { id: 201, vaccine: "COVID-19 Dose 1", date: "2024-03-15", time: "09:00 AM", location: "Downtown Clinic", doctor: "Dr. Adams" },
    { id: 202, vaccine: "COVID-19 Dose 2", date: "2024-04-15", time: "09:30 AM", location: "Downtown Clinic", doctor: "Dr. Adams" }
  ]
);



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
        <Route path="/dashboard" element={< Dashboard patient={john} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

