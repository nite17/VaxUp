import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./DigiLockerLogin.css";

const DigiLockerSignup = () => {
  // Step 1 States
  const [name, setName] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Step 2 States
  const [isInitialSignupDone, setIsInitialSignupDone] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([{ relationship: "", name: "" }]);

  // Step 1 Validation
  const validateStep1 = () => {
    if (!name.trim()) {
      setErrorMessage("Please enter your full name");
      return false;
    }

    const aadhaarRegex = /^\d{12}$/;
    if (!aadhaarRegex.test(aadhaar)) {
      setErrorMessage("Invalid Aadhaar number. Must be 12 digits.");
      return false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      setErrorMessage("Invalid mobile number. Must be 10 digits.");
      return false;
    }

    if (!dob) {
      setErrorMessage("Please select your date of birth");
      return false;
    }

    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(pin)) {
      setErrorMessage("Invalid PIN. Must be 6 digits.");
      return false;
    }

    return true;
  };

  const handleInitialSignup = () => {
    if (validateStep1()) {
      setErrorMessage("");
      setIsInitialSignupDone(true);
    }
  };

  // Family Members Functions
  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, { relationship: "", name: "" }]);
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][field] = value;
    setFamilyMembers(updatedMembers);
  };

  const handleCompleteSignup = () => {
    // Validate family members
    const isFamilyValid = familyMembers.every(member => 
      member.relationship && member.name.trim()
    );

    if (!isFamilyValid) {
      setErrorMessage("Please fill all family member details");
      return;
    }

    // Submit all data
    const formData = {
      name,
      aadhaar,
      mobile,
      dob,
      pin,
      familyMembers
    };
    console.log("Final Signup Data:", formData);
    alert("Signup complete! Check console for data.");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/DigiLocker.png" alt="DigiLocker Logo" className="logo" />
        <h2 className="title">
          {isInitialSignupDone ? "Add Family Members" : "create new account!"}
        </h2>

        {!isInitialSignupDone ? (
          /* STEP 1: Initial Signup Form */
          <>
            <input
              type="text"
              className="input-box"
              placeholder="full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="input-box"
              placeholder="aadhaar number"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
            />

            <input
              type="text"
              className="input-box"
              placeholder="mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <input
              type="date"
              className="input-box"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <input
              type="password"
              className="input-box"
              placeholder="6-digit Security PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button className="login-btn" onClick={handleInitialSignup}>
              next
            </button>
          </>
        ) : (
          /* STEP 2: Family Members Form */
          <>
            <div className="family-members">
              {familyMembers.map((member, index) => (
                <div key={index} className="member-fields">
                  <select
                    className="input-box"
                    value={member.relationship}
                    onChange={(e) => 
                      handleFamilyMemberChange(index, 'relationship', e.target.value)
                    }
                    style={{ marginRight: '10px', width: '120px' }}
                  >
                    <option value="">Relationship</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                  </select>

                  <input
                    type="text"
                    className="input-box"
                    placeholder="Full Name"
                    value={member.name}
                    onChange={(e) => 
                      handleFamilyMemberChange(index, 'name', e.target.value)
                    }
                    style={{ flex: 1 }}
                  />
                </div>
              ))}

              <button 
                type="button" 
                onClick={addFamilyMember}
                style={{
                  margin: '10px 0',
                  padding: '8px 15px',
                  background: '#5c30ee',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Add Family Member +
              </button>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="login-btn" 
                onClick={handleCompleteSignup}
                style={{ flex: 1 }}
              >
                complete signup
              </button>
            </div>
          </>
        )}

        <p className="signup">
          {isInitialSignupDone ? (
            <span onClick={() => setIsInitialSignupDone(false)} style={{ cursor: 'pointer' }}>
              ← Back to initial details
            </span>
          ) : (
            <>
              already have an account?{' '}
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <b>login</b>
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default DigiLockerSignup;