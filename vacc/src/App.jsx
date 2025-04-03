import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/Landing/NavBar';
import Carousel from './Components/Landing/Carousel';
import VaxCount from './Components/Landing/VaxCount';
import ThreeSteps from './Components/Landing/ThreeSteps';
import LatestNews from './Components/Landing/LatestNews';
import Footer from './Components/Landing/Footer.jsx';
import DigiLockerLogin from './Components/DigiLockerLogin.jsx';
import DigiLockerSignup from './Components/DigiLockerSignup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ABHAInfo from './Components/Landing/ABHAInfo.jsx';
import FAQ from './Components/Landing/FAQ.jsx';
import { Patient } from './Components/Dashboard/profile.jsx';
import DashNaV from './Components/Dashboard/DashNav.jsx';
import BarGraph from "./Components/BarGraph";
import AddVax from "./Components/Dashboard/AddVax.jsx";
import Schedule from "./Components/Dashboard/Schedule.jsx"; // Import the new Schedule component

function App() {
  // Create initial patient data
  const [patient, setPatient] = useState(new Patient(
    1, // id
    "Vansh Chani", // name
    7, // totalVaccinations
    [ // pendingVaccinations 
      { id: 101, vaccine: "Flu Booster Shot", desc: "Booster Shot", due: "2 months" }
    ],
    [ // familyMembers
      { id: 2, name: "Nehan Lil" },
      { id: 3, name: "Satwik Shukla" },
      { id: 4, name: "Shourya madan" },
    ],
    [
      { id: 101, vaccine: "COVID-19 Booster", date: "Wednesday, April 2", time: "10:30 AM", location: "City Health Center", doctor: "Dr. Rajesh Kumar" },
      { id: 102, vaccine: "Flu Shot", date: "Thursday, April 4", time: "2:00 PM", location: "Downtown Clinic", doctor: "Dr. Ananya Sharma" },
      { id: 103, vaccine: "Hepatitis B", date: "Friday, April 5", time: "1:30 PM", location: "City Hospital", doctor: "Dr. Vikram Patel" },
      { id: 104, vaccine: "MMR Vaccine", date: "Saturday, April 6", time: "9:00 AM", location: "Community Health Center", doctor: "Dr. Priya Mehta" }
    ],
    [ // history
      { id: 201, vaccine: "COVID-19 Dose 1", date: "2024-03-15", time: "09:00 AM", location: "Downtown Clinic", doctor: "Dr. Adams", status: "completed" },
      { id: 202, vaccine: "COVID-19 Dose 2", date: "2024-04-15", time: "09:30 AM", location: "Downtown Clinic", doctor: "Dr. Adams", status: "missed" }
    ]
  ));

  // Function to add a new vaccination record
  const addVaccinationRecord = (newRecord) => {
    // Update total vaccinations count
    setPatient(prevPatient => {
      // Create a new history entry
      const newHistoryEntry = {
        id: Date.now(), // Generate a unique ID
        vaccine: `${newRecord.vaccineName} ${newRecord.doseNumber}`,
        date: newRecord.dateAdministered,
        time: "N/A", // Time isn't collected in the form
        location: newRecord.location,
        doctor: newRecord.administeredBy,
        status: "completed"
      };

      // Create updated patient object
      return {
        ...prevPatient,
        totalVaccinations: prevPatient.totalVaccinations + 1,
        history: [...prevPatient.history, newHistoryEntry]
      };
    });
  };

  // Function to schedule a new appointment
  const scheduleAppointment = (appointmentData) => {
    setPatient(prevPatient => {
      // Create a new appointment entry
      const newAppointment = {
        id: Date.now(), // Generate a unique ID
        vaccine: appointmentData.vaccine,
        date: appointmentData.date,
        time: appointmentData.time,
        location: appointmentData.location,
        doctor: appointmentData.doctor
      };

      // Remove the scheduled vaccination from pending list
      const updatedPendingVaccinations = prevPatient.pendingVaccinations.filter(
        vax => vax.vaccine !== appointmentData.vaccine
      );

      // Create updated patient object
      return {
        ...prevPatient,
        appointments: [...prevPatient.appointments, newAppointment],
        pendingVaccinations: updatedPendingVaccinations
      };
    });
  };

  return (
    <BrowserRouter>
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
              <BarGraph />
              <LatestNews />
              <FAQ />
              <ABHAInfo />
              <Footer />
            </>
          }
        />
        {/* Login route */}
        <Route path="/login" element={<DigiLockerLogin />} />
        <Route path="/signup" element={<DigiLockerSignup />} />
        <Route path="/dashnav" element={<DashNaV patient={patient} />} />
        <Route path="/addvax" element={<AddVax onSave={addVaccinationRecord} />} />
        {/* Add new route for the Schedule component */}
        <Route path="/schedule" element={<Schedule patient={patient} onSchedule={scheduleAppointment} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;