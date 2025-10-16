import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is the cost of developing a ecommerce website?',
    answer:
      'The cost of ecommerce web development varies based on the specific requirements such as features built, products sold, and type of website customization you choose.',
  },
  {
    question: 'What is the technology you use to develop eCommerce website?',
    answer:
      'We use PHP-Laravel Framework with other updated latest tools to ecommerce web design and development.',
  },
  {
    question: 'Are you providing a web hosting service? If so, what is the cost?',
    answer:
      'Yes, we do offer a web hosting service that is charged depending on the server you choose.',
  },
  {
    question: 'Is it possible to make redesign ecommerce website built by some other agency?',
    answer:
      'Yes, we can work on the existing website if the previous agency has developed it using the PHP Framework technology as we do, else we recommend you redesign it with us.',
  },
  {
    question: 'Where your company is located in India?',
    answer:
      'We are located in Coimbatore and we are one of the best ecommerce website development company in Coimbatore.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50 questionanswer-page font-Plus-Jakarta">
      <div className="container mx-auto px-4 sm:w-[100%] md:w-[90%] lg:w-[85%]">
        <div className="text-center mb-10">
          <h1 className="mx-auto mt-5 font-extrabold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-[38px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] max-w-[90%] md:max-w-[85%]">
          Questions? Look Here.
          </h1>
          <p className="text-[#545465] mx-auto mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed tracking-wide  max-w-[90%] md:max-w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, autem non quasi molestiae
            beatae inventore saepe perspiciatis velit asperiores!
          </p>
        </div>

        <div className="space-y-4 mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-[19px] px-4 py-3 lg:text-[28px] lg:px-5 lg:py-4 md:text-[22px] md:px-4 md:py-3 font-bold flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-700">
                  <p className="text-[#545465] mx-auto mt-4 text-[15px] sm:text-[17px] md:text-[19px]" >{faq.answer}</p>
                </div>
              )}<hr className="my-4 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
