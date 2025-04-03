import React from "react";
import Calendar from '../../assets/Vector.png'
import tick from '../../assets/tick.png'


const HistoryCard = ({ HistoryEntry }) => {
  return (
    <div className={`p-5 rounded-2xl shadow-lg text-black relative ${HistoryEntry.status==="completed" ? 'bg-gradient-to-r from-[#0BDEF9] to-[#068393]' : 'bg-gradient-to-r from-[#F95E0B] to-[#E4DACF]'} w-[1041px] h-[263px]`}>
      <h3 className="font-semibold flex justify-between text-[24px]">

        <div>
            {HistoryEntry.vaccine} 
            {HistoryEntry.status === "missed" && <span className="text-black ml-6">(missed) </span>} 
        </div>    
        <img src={Calendar} className="w-[32px] h-[32px]" />
      </h3>
      
      <hr className="border-black w-[896px] mt-3 ml-0 mb-3"/>
      
      <div className="flex justify-between items-center mt-2 font-extralight">
        <div>
            <p className="text-[24px] mt-0 mb-0">{HistoryEntry.date}</p>
            <h2 className=" mt-1 text-[40px] font-light">{HistoryEntry.time}</h2>
        </div>

        <div className="mr-[100px]">
            <p className="text-[24px] mt-0 mb-0">Location: {HistoryEntry.location}</p>
            <p className="mt-1 text-[40px] flex justify-end">{HistoryEntry.doctor}</p>
            
        </div>  
      </div>
      
      {HistoryEntry.status === "missed" && (
        <button className="absolute bottom-4 right-26 mb-2 bg-gradient-to-r from-[#0066FF] to-[#003D99] text-white px-4 py-2 rounded-xl shadow-md w-[147px] h-[62px] flex items-center justify-center">
                <img src={tick} className="w-[30px] h-[30px] mr-2" />
                <span>Reschedule</span>    
        </button>
      )}
    </div>
  );
};

export default function History({patient}) {
  return (
    <div className="p-6 ml-[538px]">
      <h1 className="text-[64px] font-bold mb-20">History</h1>
      <div className="space-y-10">
        {patient.history.map((entry, index) => (
          <HistoryCard key={index} HistoryEntry={entry} />
        ))}
      </div>
    </div>
  );
}
