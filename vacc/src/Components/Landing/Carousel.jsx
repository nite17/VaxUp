import { useState,useEffect } from "react"
const carouselItems = [
    {
      img:'https://i.ibb.co/ncrXc2V/1.png',
      title: "AI-Powered Noise Reduction",
      description:
        "Removes unwanted noise and artifacts for crystal-clear visuals.",
    },
    {
      img:'https://i.ibb.co/B3s7v4h/2.png',
      title: "High-Resolution Enhancement",
      description: "Enhances clarity for precise medical analysis.",
    },
    {
      img:'https://i.ibb.co/XXR8KzF/3.png',
      title: "Faster Diagnosis",
      description: "AI-driven technology speeds up medical assessments.",
    },
    {
      img:'https://i.ibb.co/yg7BSdM/4.png',
      title: "Improved Abnormality Detection",
      description: "Helps radiologists identify fractures, tumors, and more.",
    },
  ];
export default function Carousel() {
    
    return(
        <div class="w-full bg-car h-140 rounded-bl-[70px] flex flex-col items-center shadow-md p-6 text-center justify-center">
           <div>{carouselItems[0].img}</div>
          </div>
       
    )
}