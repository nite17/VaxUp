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
import Dashboard from './Components/Dashboard/dashboard.jsx';
import Appointment from './Components/Dashboard/Appointment.jsx';
import { Patient } from './Components/Dashboard/profile.jsx';
import DashNaV from './Components/Dashboard/DashNav.jsx';

const john = new Patient(
  1, // id
  "John Doe", // name
  7, // totalVaccinations
  [  // pendingVaccinations 
    { id: 101, vaccine: "Flu Booster Shot", desc: "Booster Shot", due: "2 months" }
  ],
  [  // familyMembers
    { id: 2, name: "vansh reddy" },
    { id: 2, name: "kastub reddy" },
    { id: 2, name: "nehan reddy" },
    { id: 3, name: "bhavye reddy" },
    { id: 3, name: "krissh reddy" }
  ],
  [
    { id: 101, vaccine: "COVID-19 Booster", date: "Wednesday, April 2", time: "10:30 AM", location: "City Health Center", doctor: "Dr. Rajesh Kumar" },
    { id: 102, vaccine: "Flu Shot", date: "Thursday, April 4", time: "2:00 PM", location: "Downtown Clinic", doctor: "Dr. Ananya Sharma" },
    { id: 103, vaccine: "Hepatitis B", date: "Friday, April 5", time: "1:30 PM", location: "City Hospital", doctor: "Dr. Vikram Patel" },
    { id: 104, vaccine: "MMR Vaccine", date: "Saturday, April 6", time: "9:00 AM", location: "Community Health Center", doctor: "Dr. Priya Mehta" }
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
        <Route path="/dashboard" element={< Dashboard patient={john} />} />
        <Route path="/appointment" element={<Appointment patient={john}/>}/>
        <Route path="/dashnav" element={<DashNaV patient={john}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

