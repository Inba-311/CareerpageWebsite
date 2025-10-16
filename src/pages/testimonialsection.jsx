import React, { useState } from 'react';
import testimonialWomenImage from '../assets/images/testimonial-women.png';
import testimonialShape1 from '../assets/images/test-shape.png';
import testimonialShape2 from '../assets/images/testimonial-shape.png';
import testimonialShape3 from '../assets/images/testimonial-shape2.png';

const testimonials = [
  {
    quote: `"SEOMY has been a game-changer. The ease of tracking progress and managing tasks has significantly improved our workflow."`,
    name: "Alex Johnson",
    role: "Head of Operations",
  },
  {
    quote: `"This platform exceeded our expectations. We gained better visibility into our KPIs and team performance."`,
    name: "Sophia Lee",
    role: "Marketing Manager",
  },
  {
    quote: `"From UI to performance, SEOMY nails it. It's the tool our team didn't know we needed!"`,
    name: "David Kim",
    role: "Tech Lead",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => setIndex((index + 1) % testimonials.length);

  return (
    <section id="testimonial-section" className="bg-gray-100 py-20 font-Plus-Jakarta">
      <div className="container mx-auto px-4 text-center sm:w-[100%] md:w-[90%] lg:w-[85%]">
        
        <h4 className="text-md sm:text-lg">Testimonials</h4>
        <h1 className="mx-auto mt-5 text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] md:pb-6 font-extrabold leading-[38px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] max-w-[90%] lg:max-w-[70%]">
          Word from our clients
        </h1>
      </div>

      <div className="container mx-auto px-4 mt-8 sm:w-[95%] md:w-[85%] lg:w-[80%] z-1">
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow relative min-h-[385px]">
          {/* Image Side */}
          <div className="relative w-full bg-[#fccded] lg:w-2/3 lg:bg-white rounded-xl p-4 min-h-[385px]">
            <img src={testimonialShape1} alt="test-shape" className="absolute top-0 left-0 w-[90%] h-full bg-clip-content rounded-xl" />
            <div className="absolute bottom-0 -left-[4%] overflow-visible z-3">
              <img src={testimonialWomenImage} alt="testimonial-women" className="h-[90%] overflow-visible" />
            </div>
            <div className="absolute bottom-0 left-3 z-2 ">
              <img src={testimonialShape2} alt="testimonial-shape" />
            </div>
            <div className="absolute top-16 right-[55%]">
              <img src={testimonialShape3} alt="testimonial-shape2 bg-clip-content rounded-xl" />
            </div>
          </div>
          

          {/* Carousel Content */}
          <div className="relative w-full text-left lg:w-2/3 p-8 mx-auto lg:pr-10 flex flex-col justify-center">
          <div className='w-[80%] sm:w-[85%] mx-auto lg:mx-1 '>
            <div className="text-yellow-500 text-xl">★★★★★</div>
            <p className="relative text-[16px] sm:text-[17px] md:text-[18px] my-5">{testimonials[index].quote}</p>
            <div className="font-bold text-gray-900 mt-4">{testimonials[index].name}</div>
            <div className="text-sm text-gray-500">{testimonials[index].role}</div>
          </div>

          {/* Left Button */}
            <button 
              onClick={prevSlide}
              className="absolute bottom-[50%] left-10 lg:-left-15 justify-center text-lg"
            >
              <i class="fa-solid fa-chevron-left text-gray-400 hover:text-gray-700"></i>
            </button>

          {/* Right Button */}
            <button 
              onClick={nextSlide}
              className="absolute bottom-[50%] right-15 lg:right-20 justify-center text-lg"
            >
              <i class="fa-solid fa-chevron-right text-gray-400 hover:text-gray-700"></i>
            </button>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
