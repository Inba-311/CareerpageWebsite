import React from 'react'
import ecommerceImage from '../assets/images/pannel.png'
import appImage from '../assets/images/shopping1-app.png'

const PortfolioSection = () => {
  return (
    <>
    <section id="portfolio-page" className="py-16 bg-white font-Plus-Jakarta">
      <div className="container mx-auto px-4 sm:w-[100%] md:w-[90%] lg:w-[85%]">
        <div className="text-center">
          <h4 className="text-md sm:text-lg">Previous Experience</h4>
          <h1 className="mx-auto mt-5 text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] font-extrabold leading-[38px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] max-w-[90%]">
            What's our Project Portfolio?
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* E-commerce Card */}
          <div className="overflow-hidden rounded-2xl bg-[#e8ffd6] hover:transition-all duration-300 group overflow-hidden">
            <div className="ps-10 pt-10 pe-0">
              <h3 className="text-xl sm:text-2xl font-bold">E-commerce Development</h3>
              <p className="text-base sm:text-lg mt-2 text-gray-600">
                Create professional ads, branded content, and stunning stories in minutes. Now
                available on desktop and mobile.
              </p>
              <div className="mt-8">
                <img
                  src={ecommerceImage}
                  alt="E-commerce Platform"
                  className="w-full h-auto object-contain transform transition duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Application Card */}
          <div className="overflow-hidden rounded-2xl bg-[#f1effa] hover:transition-all duration-300 group overflow-hidden">
            <div className="ps-10 pt-10 pe-0">
              <h3 className="text-xl sm:text-2xl font-bold">Application Development</h3>
              <p className="text-base sm:text-lg mt-2 text-gray-600">
                Create professional ads, branded content, and stunning stories in minutes. Now
                available on desktop and mobile.
              </p>
              <div className="mt-8">
                <img
                  src={appImage}
                  alt="Application Image"
                  className="w-full h-auto object-contain transform transition duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr className="container mx-auto border-gray-300 my-10" />
    </>
  )
}

export default PortfolioSection
