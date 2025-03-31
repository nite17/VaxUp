import {ChevronLeft,ChevronRight} from 'react-feather'
import { useState, useEffect } from "react"


const carouselItems = [
  {
    img: '/c1.png',
    title: "VaxUp",
    description:
      "Easily book your vaccination appointments, access certificates and  stay updated on the latest health advisories - all in one place.",
    description2: 'Your health, just a click away.',
  },
  {
    img: '/article1.jpg',
    title: "Why Timely Vaccination Matters: Protecting Yourself and Your Community",
    description: "Learn how timely vaccinations safeguard both individual and public health by preventing the spread of diseases.",
    description2: '',
  },
  {
    img: '/article2.jpg',
    title: "Breaking Myths: The Science Behind Vaccines and Their Safety",
    description: "Uncover the facts about vaccine safety, debunk common misconceptions, and understand their rigorous development process.",
    description2: '',
  },
  {
    img: '/article3.jpg',
    title: "From Lab to Life: The Journey of a Vaccine",
    description: "Understand the rigorous research, testing, and approval process behind every vaccine.",
    description2: '',
  },
];


export default function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  }
  const prevSlide = () => {
    if(index==0){
      return 
    }
    setIndex((prevIndex) => (prevIndex - 1) % carouselItems.length);
  }


  
  

  return (
    <div class="w-full bg-car h-[587.91px] rounded-bl-[70px] flex flex-col items-center  text-center justify-center ">
      <img src={carouselItems[index].img} class="w-full h-[587.91px] inset-0   rounded-bl-[70px] object-cover" ></img>
      <h3 class={index==0? 'absolute ml-90 text-8xl  w-[700px] text-white font-black -mt-45' :'absolute ml-90 text-5xl w-[700px] text-white font-black -mt-45'}>{carouselItems[index].title}</h3>
      <p class="absolute ml-90 text-xl  text-white font-medium mt-10 max-w-120">{carouselItems[index].description}</p>
      <p class="absolute ml-88 text-2xl text-white font-medium mt-40 max-w-120">{carouselItems[index].description2}</p>
      <div class="absolute ml-88 flex mt-60 space-x-2">
        <button class="rounded-2xl text-xl px-12 mt-2 py-3 border-white border-2 text-white font-medium bg-transparent hover:opacity-60 hover:cursor-pointer">Learn More</button>
        {index==0?<button class="rounded-2xl text-xl px-12 mt-2 py-3 border-white border-2 text-vaxcom bg-white font-medium hover:opacity-60 hover:cursor-pointer">Register Now</button>:null}
       
       
      </div>
      <button class="bg-transparent border-0 text-white absolute left-0" onClick={prevSlide}><ChevronLeft size={40}/></button>
      <button class="bg-transparent border-0 text-white absolute right-0" onClick={nextSlide}><ChevronRight size={40}/></button>
    </div>


  )
}