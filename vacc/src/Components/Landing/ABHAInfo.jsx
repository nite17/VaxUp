import React from "react";
import ABHA from "./ABHA3.png";

const ABHAInfo = () => {
  return (
    <div className="w-full bg-[#D9D9D9] py-3 flex space-x-2">
      <div className="max-w-4xl mx-auto flex items-center  px-40">
        {/* Left Section: Text */}
        <div className="py-20">
          <h2 className="text-7xl font-bold gradient-text mb-0">ABHA ID</h2>
          <h2 className="text-7xl font-bold gradient-text mt-0">& Benefits</h2>
          <p className="text-gray-700 mt-5 leading-relaxed text-2xl max-w-5xl">
          ABHA (Ayushman Bharat Health Account) ID is a digital health identity under India’s ABDM. 
          ABHA number is a 14 digit number that will uniquely identify you as a participant in India’s digital healthcare ecosystem. ABHA number will establish a strong and trustable identity for you that will be accepted by healthcare providers across the country.
          </p>
          <a
            href="https://abha.abdm.gov.in/abha/v3/"
            className="text-[#006874] font-semibold mt-5 inline-block text-3xl no-underline"
          >
            Learn more
          </a>
        </div>

        {/* Right Section: Image */}
      </div>

      
      <div className="w-full flex py-20 ">
        <img
          src={ABHA}
          alt="ABHA Card"
          className=" absolute -mt-[300px] right-0"
        />
      </div>
    </div>
  );
};

export default ABHAInfo;
