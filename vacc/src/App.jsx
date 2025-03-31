import { useState } from 'react'
import './App.css'
import NavBar from './Components/Landing/NavBar'
import Carousel from './Components/Landing/Carousel'
import VaxCount from './Components/Landing/VaxCount'
import ThreeSteps from './Components/Landing/ThreeSteps'
import LatestNews from './Components/Landing/LatestNews'
import FAQItem from './Components/FAQItem'
const faqData = [
  { question: "How do I book a vaccination appointment?", answer: "You can book an appointment online through our portal." },
  { question: "Can I reschedule or cancel my appointment?", answer: "Yes, you can reschedule or cancel within 24 hours before your appointment." },
  { question: "What documents do I need to bring on the day of vaccination?", answer: "You need to bring a valid ID and your appointment confirmation." },
  { question: "Are there any side effects after vaccination?", answer: "Some mild side effects like fever and fatigue may occur." },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-stone-200">
        <NavBar />
      </div>
      <Carousel />
      <VaxCount />
      <ThreeSteps />
      <LatestNews />
      <div className="bg-white min-h-screen p-6">
      <div className="  mx-auto">
        <h2 className="text-2xl font-bold mb-2 ml-40 text-vaxcom">FAQs</h2>
        <hr className="border-black mb-4 w-[85%] mx-auto"  />  {/* Black line under title */}

        {faqData.map((faq, index) => (
          <FAQItem  key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>

    </>
  )
}

export default App
