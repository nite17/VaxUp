import React, { useState } from "react";
import "./DigiLockerLogin.css";

const DigiLockerLogin = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [idValue, setIdValue] = useState("");   // Mobile or Aadhaar value
  const [pinValue, setPinValue] = useState(""); // 6-digit PIN
  const [errorMessage, setErrorMessage] = useState("");

  const handleNext = () => {
    // Validate the ID field
    if (activeTab === "mobile") {
      const mobileRegex = /^\d{10}$/;
      if (!mobileRegex.test(idValue)) {
        setErrorMessage("Invalid mobile number. Must be 10 digits.");
        return;
      }
    } else if (activeTab === "aadhaar") {
      const aadhaarRegex = /^\d{12}$/;
      if (!aadhaarRegex.test(idValue)) {
        setErrorMessage("Invalid Aadhaar number. Must be 12 digits.");
        return;
      }
    }

    // Validate the PIN field: exactly 6 digits
    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(pinValue)) {
      setErrorMessage("Invalid PIN. Must be 6 digits.");
      return;
    }

    // All validations passed
    setErrorMessage("");
    alert("Validation successful!");
    // Proceed with further processing...
  };

  // Change the placeholder for the first field based on the active tab
  const idPlaceholder = activeTab === "mobile" ? "mobile mumber" : "aadhaar number";

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="/DigiLocker.png"
          alt="DigiLocker Logo"
          className="logo"
        />

        <h2 className="title">sign-in to your account!</h2>
        <div className="tabs">
          <button
            className={`tab ${activeTab === "mobile" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("mobile");
              setIdValue("");
              setPinValue("");
              setErrorMessage("");
            }}
          >
            mobile
          </button>
          <button
            className={`tab ${activeTab === "aadhaar" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("aadhaar");
              setIdValue("");
              setPinValue("");
              setErrorMessage("");
            }}
          >
            aadhaar
          </button>
        </div>
        {/* First Input: Mobile or Aadhaar */}
        <input
          type="text"
          className="input-box"
          placeholder={idPlaceholder}
          value={idValue}
          onChange={(e) => setIdValue(e.target.value)}
        />
        {/* Second Input: 6-digit PIN */}
        <input
          type="password"
          className="input-box"
          placeholder="6-digit Security PIN"
          value={pinValue}
          onChange={(e) => setPinValue(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="forgot">forgot PIN?</div>
        <button className="login-btn" onClick={handleNext}>
          next
        </button>
        <p className="signup">
          don't have an account? <b>sign-up!</b>
        </p>
      </div>
    </div>
  );
};

export default DigiLockerLogin;
