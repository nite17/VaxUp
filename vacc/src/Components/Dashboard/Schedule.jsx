import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Schedule.css";

const Schedule = ({ patient, onSchedule }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  
  // Get pending vaccination from patient data
  const pendingVaccination = patient?.pendingVaccinations[0];
  
  // Available time slots
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
  
  // Available locations
  const locations = ["City Health Center", "Downtown Clinic", "City Hospital", "Community Health Center"];
  
  // Available doctors
  const doctors = ["Dr. Rajesh Kumar", "Dr. Ananya Sharma", "Dr. Vikram Patel", "Dr. Priya Mehta"];
  
  // Get today's date and format it for min attribute of date input
  const today = new Date().toISOString().split('T')[0];
  
  // Convert selected date to formatted string (e.g., "Monday, April 15")
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedLocation || !selectedDoctor) {
      alert("Please fill in all fields");
      return;
    }
    
    // Create appointment data object
    const appointmentData = {
      vaccine: pendingVaccination.vaccine,
      date: formatDate(selectedDate),
      time: selectedTime,
      location: selectedLocation,
      doctor: selectedDoctor
    };
    
    // Call the onSchedule function to update patient data
    onSchedule(appointmentData);
    
    // Show success message and navigate back to dashboard
    alert("Appointment scheduled successfully!");
    navigate('/dashnav');
  };

  return (
    <div className="dashboard-container">
      
      <div className="schedule-container">
        <div className="schedule-header">
          <Link to="/dashnav" className="back-button">
            <span>&larr; Back to Dashboard</span>
          </Link>
          <h1 className="schedule-title">Schedule Vaccination</h1>
        </div>
        
        <div className="vaccination-info-card">
          <h2>Pending Vaccination</h2>
          <div className="vaccine-details">
            <p className="vaccine-name">{pendingVaccination?.vaccine}</p>
            <p className="vaccine-due">Due in {pendingVaccination?.due}</p>
            <p className="vaccine-desc">{pendingVaccination?.desc}</p>
          </div>
        </div>
        
        <form className="schedule-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="date">Select Date</label>
                <input 
                  type="date" 
                  id="date" 
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="time">Select Time</label>
                <div className="time-slots">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="location">Select Location</label>
                <select 
                  id="location" 
                  value={selectedLocation} 
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  required
                >
                  <option value="">Select a location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="doctor">Select Doctor</label>
                <select 
                  id="doctor" 
                  value={selectedDoctor} 
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  required
                >
                  <option value="">Select a doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>{doctor}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="appointment-summary">
            <h3>Appointment Summary</h3>
            <div className="summary-details">
              {selectedDate && (
                <p><strong>Date:</strong> {formatDate(selectedDate)}</p>
              )}
              {selectedTime && (
                <p><strong>Time:</strong> {selectedTime}</p>
              )}
              {selectedLocation && (
                <p><strong>Location:</strong> {selectedLocation}</p>
              )}
              {selectedDoctor && (
                <p><strong>Doctor:</strong> {selectedDoctor}</p>
              )}
              {pendingVaccination && (
                <p><strong>Vaccine:</strong> {pendingVaccination.vaccine}</p>
              )}
            </div>
          </div>
          
          <button type="submit" className="schedule-button">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;