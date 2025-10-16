import React from 'react';
import appIcon1 from '../assets/images/app-icon1.png';
import appIcon2 from '../assets/images/app-icon2.png';
import appIcon3 from '../assets/images/app-icon3.png';
import appIcon4 from '../assets/images/app-icon4.png';
import appIcon5 from '../assets/images/app-icon5.png';
import appIcon6 from '../assets/images/app-icon6.png';
import appIcon7 from '../assets/images/app-icon7.png';
import appIcon8 from '../assets/images/app-icon8.png';
import screenImage from '../assets/images/icon-screen-image.png';
import shape1 from '../assets/images/shape1.png';
import shape2 from '../assets/images/shape2.png';

const CtaSection = () => {
  const appIcons = [
    appIcon1,
    appIcon2,
    appIcon3,
    appIcon4,
    appIcon5,
    appIcon6,
    appIcon7,
    appIcon8,
  ];

  return (
    <section
      id="cta-section"
      className="relative font-Plus-Jakarta py-20 md:py-25 bg-[#f2f8fd] overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 sm:w-[100%] md:w-[90%] lg:w-[85%]">
        <div className="flex flex-wrap justify-evenly items-center gap-2 md:gap-4 my-8">
          {appIcons.map((icon, index) => (
            <div
              key={index}
              className={`w-20 sm:w-24 md:w-28 transition-transform ${
                index % 2 === 1 ? 'mb-16' : ''
              }`}
            >
              <img src={icon} alt={`app-icon-${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>

        <div className="text-center relative z-20 px-4 md:px-12 lg:px-40">
          <h1 className="mx-auto mt-5 font-extrabold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-[38px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] max-w-[90%] md:max-w-[85%]">
          Easily Bring AI in Your Workflow to Create Content
          </h1>
          <p className="text-[#545465] mx-auto mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed tracking-wide  max-w-[95%] md:max-w-[90%]">
            There are many variations of passages of Lorem Ipsum available but the majority
            have suffered alteration in some form, by more and more injected humour.
          </p>
          
          <button className="bg-[#7b5dd6]/95 text-white font-medium text-[16px] px-5 py-2 sm:text-[17px] md:text-[18px] sm:px-5 sm:py-2 rounded-lg lg:px-7  lg:py-4 sm:rounded-xl mt-6 hover:bg-[#7b5dd6] transition">
          Integrate With Your App
          </button>
        </div>

        {/* Foreground animated image */}
        <div className="absolute left-5 -bottom-5  md:left-12 md:bottom-0 animate-moveUpDown z-0 max-w-md md:max-w-lg">
          <img src={screenImage} alt="screen" className="w-full h-auto" />
        </div>

        <div className="absolute -left-50 -bottom-70 z-0 max-w-md md:max-w-lg">
            <img src={shape1} alt="shape1" className='w-full h-auto'/>
        </div>

        <div className="absolute md:right-12 md:bottom-50 lg:right-12 lg:bottom-25 right-4 -bottom-5 animate-moveUpDown z-0 max-w-md md:max-w-lg">
          <img src={shape2} alt="shape2" className="w-full h-auto" />
        </div>

        
      </div>
    </section>
  );
};

export default CtaSection;
