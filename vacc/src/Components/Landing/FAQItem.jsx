import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    
    <div
      className="w-[80%]  mx-auto p-4 rounded-lg shadow-md transition-all duration-300 mb-[30px] bg-gray-200 "
      style={{
        background: isOpen
          ? "linear-gradient(to right, var(--color-FAQfrom), var(--color-FAQto))"
        :''
      }}
    >
      <button
        className="flex justify-between border-0  bg-transparent items-center w-full text-left font-medium focus:outline-none "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div class="text-vaxcom text-xl py-2 ml-4 ">{question}</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class={`transform transition-transform duration-300 text-2xl ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0" }`}
      >
        <p className="p-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;