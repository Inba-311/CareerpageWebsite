import React from 'react';
import FormbackgroundImage from '../assets/images/form-background-image.jpg';
import LocationImage from '../assets/images/location-footer.png';

const Formsection = () => {
  return (
    <>
    {/* Form Section */}
    <section id="form-section" className="bg-gray-100 py-20 font-Plus-Jakarta">
    <div className="container mx-auto px-0 md:px-4 sm:w-[100%] md:w-[90%] lg:w-[85%]">
      <div className="text-center">
        <h4 className="text-md sm:text-lg">Let's Work with us</h4>
          <h1 className="mx-auto mt-5 text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] md:pb-6 font-extrabold leading-[38px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] max-w-[90%] lg:max-w-[70%]">
            If you want to work please contact with us!
          </h1>
      </div>

      <div className="relative mt-10 mx-4 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 bg-white rounded-2xl ">
        <div className="relative col-span-5">
          <img src={FormbackgroundImage} alt="form-background" className="w-full h-full" />
          <span className="absolute w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] md:w-[180px] md:h-[180px] rounded-[25px] bg-[linear-gradient(125deg,_rgba(160,90,137,1)_0%,_rgba(199,62,155,1)_47%,_rgba(215,160,197,1)_100%)] top-[60px] -left-[50px] z-20 transform rotate-[25deg]"></span>
          <div className="absolute inset-0 flex flex-col justify-center items-center -bottom-2/4">
            <img src={LocationImage} alt="location-image" className="w-auto h-16 mb-5" />
            <h4 className="text-2xl font-semibold leading-[40px] text-white text-center px-8 pb-10 md:pb-1">24/3, MK Squre, Sri Vari Ramakrishna Garden, Coimbatore</h4>
          </div>
        </div>
        <div className='col-span-7'>
          <form className="space-y-4 p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4
            ">
              <div>
                <label htmlFor="fullName" className="block text-[16px] font-semibold md:text-[18px] py-2">Name*</label>
                <input type="text" id="fullName" placeholder="Your full name..." className="w-full border border-gray-300 p-2 rounded bg-gray-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[16px] font-semibold md:text-[18px] py-2">Email*</label>
                <input type="email" id="email" placeholder="Your Email Address..." className="w-full border border-gray-300 p-2 rounded bg-gray-50" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-[16px] font-semibold md:text-[18px] py-2">Phone number*</label>
              <input type="tel" id="phone" placeholder="Your mobile number..." className="w-full border border-gray-300 p-2 rounded bg-gray-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mediumblock text-[16px] font-semibold md:text-[18px] py-2">Message*</label>
              <textarea id="message" rows="4" placeholder="Your Message..." className="w-full border border-gray-300 p-2 rounded bg-gray-50"></textarea>
            </div>
            <button type="submit" className="bg-[#7b5dd6]/95 text-white font-medium text-[16px] p-4 sm:text-[17px] md:text-[18px] rounded-lg sm:rounded-xl mt-6 hover:bg-[#7b5dd6] transition">
              Send your message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Formsection