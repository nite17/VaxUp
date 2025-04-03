import React, { useState } from "react";
import "./ThreeSteps.css";
import ThreeStepsImg from "../../assets/ThreeStepsImg.jpg";

const zip = {
  "632602": [
    { hospital: "Government Hospital, Gudiyatham", phone: "04171-221111", category: "Taluk Hospital" },
    { hospital: "Government Hospital, Vaniyambadi", phone: "04174-222222", category: "Taluk Hospital" },
    { hospital: "Government Hospital, Tirupattur", phone: "04179-223333", category: "Taluk Hospital" }
  ],
  "632101": [
    { hospital: "Government Hospital, Vellore", phone: "0416-2222222", category: "District Hospital" },
    { hospital: "Christian Medical College, Vellore", phone: "0416-2282222", category: "Private Hospital" },
    { hospital: "Apollo Hospital, Vellore", phone: "0416-2233333", category: "Private Hospital" }
  ]
};

export default function ThreeSteps() {
  const [zipcode, setZipcode] = useState(""); // State for user input
  const [hospitals, setHospitals] = useState([]); // State for hospital list
  const [showHospitals, setShowHospitals] = useState(false); // State for visibility

  // Handle input change
  const handleInputChange = (event) => {
    setZipcode(event.target.value);
  };

  // Handle button click
  const handleClick = () => {
    if (zip[zipcode]) {
      setHospitals(zip[zipcode]); // Set all hospitals for the entered pincode
      setShowHospitals(true);
    } else {
      setHospitals([]);
      setShowHospitals(false);
    }
  };

  return (
    <div className="ThreeSteps">
      <div className="content">
        <h1>Vaccines can help you stay healthy. Get yours now</h1>
        <ol>
          <li>Enter your ZIP Code</li>
          <li>Choose your nearest hospital</li>
          <li>Call or visit their website to check vaccine availability and make an appointment</li>
        </ol>
        <div>
          <h2>Enter 6-digit ZIP Code</h2>
          <div className="ZipCode">
            <input type="text" id="Zip" value={zipcode} onChange={handleInputChange} />
            <button id="b1" onClick={handleClick}>Search</button>
          </div>

          {/* Hospital Information */}
          {showHospitals && hospitals.length > 0 && (
            <div className="flex justify-center items-center relative -mt-24">
              <div className="absolute ml-180 bg-gradient-to-r from-logofrom to-logoto rounded-lg h-auto w-[600px] z-10 flex flex-col items-center p-4">
                <h2 className="text-2xl text-vaxcom text-center">Hospitals in {zipcode}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle absolute right-0 mr-4 top-0 mt-4 hover:rotate-180 hover:scale-110 transition-all duration-300 hover:cursor-pointer" viewBox="0 0 16 16" onClick={() => setShowHospitals(false)}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
                </h2>
                <ul className="text-vaxcom">
                  {hospitals.map((hospital, index) => (
                    <li key={index} className="border-b border-gray-400 p-2">
                      <strong>{hospital.hospital}</strong><br />
                      📞 {hospital.phone} <br />
                      🏥 {hospital.category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <img src={ThreeStepsImg} alt="Three Steps" />
    </div>
  );
}
