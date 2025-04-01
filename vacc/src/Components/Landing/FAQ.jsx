import React from 'react'
import FAQItem from './FAQItem';
const FAQ = () => {

  const faqData = [
    { question: "How do I book a vaccination appointment?", answer: "You can book an appointment online through our portal." },
    { question: "Can I reschedule or cancel my appointment?", answer: "Yes, you can reschedule or cancel within 24 hours before your appointment." },
    { question: "What documents do I need to bring on the day of vaccination?", answer: "You need to bring a valid ID and your appointment confirmation." },
    { question: "Are there any side effects after vaccination?", answer: "Some mild side effects like fever and fatigue may occur." },
  ];
  return (
    <div className="mx-auto mb-[200px]">
      <h2 className="text-4xl font-semibold mb-6 ml-40 text-vaxcom ">FAQs</h2>
      <hr className=" text-vaxcom mb-8 w-[90%] " />
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default FAQ
