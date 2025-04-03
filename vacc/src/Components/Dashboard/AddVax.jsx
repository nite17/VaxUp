import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // back arrow icon
import { FiUploadCloud } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import "./AddVax.css";

const AddVax = ({ onSave }) => {
  const navigate = useNavigate();
  const [vaccineName, setVaccineName] = useState("");
  const [doseNumber, setDoseNumber] = useState("");
  const [dateAdministered, setDateAdministered] = useState("");
  const [location, setLocation] = useState("");
  const [administeredBy, setAdministeredBy] = useState("");
  const [proofFile, setProofFile] = useState(null);

  const handleFileChange = (e) => {
    setProofFile(e.target.files[0]);
  };

  const handleSave = () => {
    // Check if required fields are filled
    if (!vaccineName || !doseNumber || !dateAdministered || !location) {
      alert("Please fill out all required fields");
      return;
    }
    
    // Create record object
    const newRecord = {
      vaccineName,
      doseNumber,
      dateAdministered,
      location,
      administeredBy,
      proofFile
    };
    
    // Send data to parent component
    onSave(newRecord);
    
    // Alert and navigate back to dashboard
    alert("Vaccination record saved successfully!");
    navigate("/dashnav");
  };

  // Handler for back button
  const handleBack = () => {
    navigate("/dashnav");
  };

  return (
    <div className="add-vaccine-container">
      {/* Header outside the card */}
      <div className="header-outside">
        <FaArrowLeft className="back-arrow" onClick={handleBack} style={{ cursor: 'pointer' }} />
        <h2 className="page-title">Add Vaccine Record</h2>
        <button className="save-btn" onClick={handleSave}>
          <span className="save-btn-text">Save</span>
        </button>
      </div>
      
      {/* Card container for the form */}
      <div className="add-vaccine-card">
        <div className="form-section">
          {/* Left Column */}
          <div className="left-column">
            <div className="form-group">
              <label htmlFor="vaccineName">Vaccine Name*</label>
              <select
                id="vaccineName"
                value={vaccineName}
                onChange={(e) => setVaccineName(e.target.value)}
                required
              >
                <option value="">Select vaccine</option>
                <option value="Covaxin">Covaxin</option>
                <option value="Covishield">Covishield</option>
                <option value="Sputnik V">Sputnik V</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="doseNumber">Dose Number*</label>
              <select
                id="doseNumber"
                value={doseNumber}
                onChange={(e) => setDoseNumber(e.target.value)}
                required
              >
                <option value="">Select dose</option>
                <option value="Dose 1">Dose 1</option>
                <option value="Dose 2">Dose 2</option>
                <option value="Booster">Booster</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dateAdministered">Date Administered*</label>
              <input
                type="date"
                id="dateAdministered"
                value={dateAdministered}
                onChange={(e) => setDateAdministered(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location*</label>
              <input
                type="text"
                id="location"
                placeholder="Enter location (e.g., hospital, city)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="administeredBy">Administered By</label>
              <input
                type="text"
                id="administeredBy"
                placeholder="Enter doctor's name (optional)"
                value={administeredBy}
                onChange={(e) => setAdministeredBy(e.target.value)}
              />
            </div>
          </div>

          {/* Right Column (File Upload) */}
          <div className="right-column">
            <label className="upload-label">Upload Proof (File Upload)</label>
            <div className="upload-box">
              <FiUploadCloud size={50} color="#4A90E2" />
              <p className="upload-text">
                Choose a file or drag and drop it here
                <br />
                JPEG, PNG and PDF formats up to 5MB
              </p>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                className="file-input"
              />
              <button className="browse-btn">Browse File</button>
              {proofFile && <p className="file-name">Selected: {proofFile.name}</p>}
              <button className="cancel-btn" onClick={() => setProofFile(null)}>
                <span className="cancel-btn-text">X Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVax;