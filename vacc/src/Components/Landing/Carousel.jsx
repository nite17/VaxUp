import { useState,useEffect } from "react"

const carouselItems = [
    {
      img: '/c1.png',
      title: "VaxUp",
      description:
        "Easily book your vaccination appointments ,access certificates and  stay updated on the latest health advisories - all in one place.",
        description2:'Your health, just a click away.',
    },
    {
      img:'https://i.ibb.co/B3s7v4h/2.png',
      title: "High-Resolution Enhancement",
      description: "Enhances clarity for precise medical analysis.",
      description2:'',
    },
    {
      img:'',
      title: "Faster Diagnosis",
      description: "AI-driven technology speeds up medical assessments.",
      description2:'',
    },
    {
      img:'https://i.ibb.co/yg7BSdM/4.png',
      title: "Improved Abnormality Detection",
      description: "Helps radiologists identify fractures, tumors, and more.",
      description2:'',
    },
  ];


export default function Carousel() {
    const [index,setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length
          );
        }, 100000);
        return () => clearInterval(interval);
      }, []);

      const nextSlide=()=>{
            setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }
        const prevSlide=()=>{
            setIndex((prevIndex) => (prevIndex - 1) % carouselItems.length);
        }



    
    return(
        <div class="w-full bg-car h-[587.91px] rounded-bl-[70px] flex flex-col items-center shadow-md  text-center justify-center">
           <img src={carouselItems[index].img} class="w-full h-[587.91px] inset-0   rounded-bl-[70px]"></img>
           <h3 class="absolute ml-90 text-7xl text-white font-bold -mt-45">{carouselItems[index].title}</h3>
           <p class="absolute ml-90 text-xl text-white font-small mt-5 max-w-112">{carouselItems[index].description}</p>
           <p class="absolute ml-88 text-2xl text-white font-medium mt-40 max-w-120">{carouselItems[index].description2}</p>
           <div class="absolute ml-88 flex mt-60 space-x-2">
            <button class="rounded-2xl px-10 mt-2 py-2 border-white border-2 text-white font-medium">Learn More</button>
            <button class="rounded-2xl px-10 mt-2 py-2 border-white border-2 text-vaxcom bg-white font-medium">Register Now</button>
           </div>
            
          </div>
        
       
    )
}