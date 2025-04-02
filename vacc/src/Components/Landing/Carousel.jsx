import {ChevronLeft,ChevronRight} from 'react-feather'
import { useState, useEffect, useRef } from "react"
import VaccinationTiming from '../VaccinationTiming';
import VaccinationImportance from '../VaccinationImportance';
import VaccineJourney from '../VaccineJourney';
import './Carousel.css';

const carouselItems = [
  {
    img: '/c1 (1).png',
    title: "VaxUp",
    description:
      "Easily book your vaccination appointments, access certificates and  stay updated on the latest health advisories - all in one place.",
    description2: 'Your health, just a click away.',
    component: null
  },
  {
    img: '/article1.jpg',
    title: "Why Timely Vaccination Matters: Protecting Yourself and Your Community",
    description: "Learn how timely vaccinations safeguard both individual and public health by preventing the spread of diseases.",
    description2: '',
    component: VaccinationTiming
  },
  {
    img: '/article2.jpg',
    title: "Breaking Myths: The Science Behind Vaccines and Their Safety",
    description: "Uncover the facts about vaccine safety, debunk common misconceptions, and understand their rigorous development process.",
    description2: '',
    component: VaccinationImportance
  },
  {
    img: '/article3.jpg',
    title: "From Lab to Life: The Journey of a Vaccine",
    description: "Understand the rigorous research, testing, and approval process behind every vaccine.",
    description2: '',
    component: VaccineJourney
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [showArticle, setShowArticle] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const articleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showArticle) {
        setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [showArticle]);

  const nextSlide = () => {
    if (!showArticle) {
      setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }
  }

  const prevSlide = () => {
    if (!showArticle && index !== 0) {
      setIndex((prevIndex) => (prevIndex - 1) % carouselItems.length);
    }
  }

  const handleLearnMore = () => {
    if (carouselItems[index].component) {
      setShowArticle(true);
      setTimeout(() => {
        const navbarHeight = 120; // accounting for navbar height and some padding
        const elementPosition = articleRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  }

  const handleCloseArticle = () => {
    setIsClosing(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      setShowArticle(false);
      setIsClosing(false);
    }, 500);
  }

  const ArticleComponent = carouselItems[index].component;

  return (
    <div className="relative mt-24">
      <div className="w-full bg-car h-[587.91px] rounded-bl-[70px] rounded-br-[70px] flex flex-col items-center text-center justify-center">
        <img src={carouselItems[index].img} className="w-full h-[587.91px] inset-0 rounded-bl-[70px] rounded-br-[70px] object-cover" alt={carouselItems[index].title}></img>
        <h3 className={index==0? 'absolute ml-90 text-8xl w-[700px] text-white font-black -mt-45 -mb-2' : 'absolute ml-90 text-5xl w-[700px] text-white font-black -mt-45'}>
          {carouselItems[index].title}
        </h3>
        <p className="absolute ml-90 text-xl text-white font-medium mt-10 max-w-120">{carouselItems[index].description}</p>
        <p className="absolute ml-88 text-2xl text-white font-medium mt-40 max-w-120">{carouselItems[index].description2}</p>
        <div className="absolute ml-88 flex mt-60 space-x-2">
          <button 
            className="rounded-2xl text-xl px-12 mt-2 py-3 border-white border-2 text-white font-medium bg-transparent hover:opacity-60 hover:cursor-pointer"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
          {index==0 && (
            <button className="rounded-2xl text-xl px-12 mt-2 py-3 border-white border-2 text-vaxcom bg-white font-medium hover:opacity-60 hover:cursor-pointer">
              Register Now
            </button>
          )}
        </div>
        <button className="bg-transparent border-0 text-white absolute left-0" onClick={prevSlide}><ChevronLeft size={40}/></button>
        <button className="bg-transparent border-0 text-white absolute right-0" onClick={nextSlide}><ChevronRight size={40}/></button>
      </div>

      {/* Article Dropdown */}
      {showArticle && ArticleComponent && (
        <div className="relative w-full" ref={articleRef}>
          <div className={`article-dropdown absolute top-0 left-0 w-full bg-white z-10 ${isClosing ? 'closing' : ''}`}>
            <button 
              onClick={handleCloseArticle}
              className="close-button"
              aria-label="Close article"
            />
            <ArticleComponent />
          </div>
        </div>
      )}
    </div>
  );
}
