import React from 'react';
import dashboard from '../assets/images/dashboard.jpg';

const BannerSection = () => {
  return (
    <section
      id="banner-page"
      className="font-Plus-Jakarta pt-[120px] sm:pt-[80px] md:pt-[100px] lg:pt-[160px] pb-[40px] sm:pb-[20px] bg-[linear-gradient(176deg,_rgba(251,250,255,1)_0%,_rgba(231,228,247,1)_20%,_rgba(255,255,255,1)_94%)]"
    >
      <div className="max-w-[90%] md:max-w-[83%] mx-auto md:px-4 px-0">
        <div className="text-center px-4 sm:px-6 md:px-10 lg:px-16">
          <h1 className="mx-auto mt-5 font-extrabold animate__animated animate__flipInX text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-[38px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] max-w-[90%] md:max-w-[75%]">
            Build your ecommerce website in 3 steps!
          </h1>

          <p className="text-[#545465] mx-auto mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed tracking-wide max-w-[95%] md:max-w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, autem non quasi molestiae beatae inventore saepe perspiciatis velit asperiores!
          </p>

          <button className="bg-[#7b5dd6]/95 text-white font-medium text-[16px] p-4 sm:text-[17px] md:text-[18px] rounded-lg sm:rounded-xl mt-6 hover:bg-[#7b5dd6] transition">
            Get Free Demo Now
          </button>
        </div>

        
      </div>
      <div className="max-w-[100%] sm:max-w-[90%] md:max-w-[83%] mx-auto md:px-4 px-0 mt-10 md:mt-12 lg:mt-14">
          <img
            src={dashboard}
            alt="dashboard"
            className="w-full h-auto"
          />
        </div>
    </section>
  );
};

export default BannerSection;
