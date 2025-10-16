import React from 'react';
import footerImage from '../assets/images/footer-shape.png';
import { SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { TfiPinterest } from "react-icons/tfi";
import { BsThreads } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <>
      <section className='font-Plus-Jakarta bg-[#120036] py-8 text-white relative'>
        <img className='absolute top-0 w-full' src={footerImage} alt="" />
        <div className="container mx-auto sm:w-[100%] md:w-[90%] lg:w-[85%] px-4 py-4 md:py-8 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className='col-span-4'>
              <h5 className="mb-3 md:text-2xl text-xl
               font-bold">About Company</h5>
              <p className="text-md text-[#9e95ab] leading-[25px] md:leading-[30px]">
                Earnest team committed to delivezring the best in industry. We’re more than happy to deliver you the best! Reach out to partner with us.
              </p>
              <h5 className="mt-7 md:mt-10 text-xl md:text-2xl font-bold pb-3">Follow Us</h5>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-lg w-[35px] h-[35px] md:text-xl md:w-[45px] md:h-[45px] flex items-center justify-center border-[1px] rounded-full">
                  <SiInstagram/>
                </a>
                <a href="#" className="text-lg w-[35px] h-[35px] md:text-xl md:w-[45px] md:h-[45px] flex items-center justify-center border-[1px] rounded-full">
                  <SiWhatsapp/>
                </a>                
                <a href="#" className="text-lg w-[35px] h-[35px] md:text-xl md:w-[45px] md:h-[45px] flex items-center justify-center border-[1px] rounded-full">
                  <BsThreads/>
                </a>
                <a href="#" className="text-lg w-[35px] h-[35px] md:text-xl md:w-[45px] md:h-[45px] flex items-center justify-center border-[1px] rounded-full">
                  <TfiPinterest/>
                </a>
              </div>
            </div>
            <div className='col-span-3'>
              <h5 className="mt-2 md:mt-0 text-xl md:text-2xl font-bold">Services</h5>
              <ul className="text-md text-[#9e95ab] space-y-1 mt-2 leading-[25px] md:leading-[40px]">
                <li>Web Development</li>
                <li>Web Design</li>
                <li>Android App Development</li>
                <li>Digital Marketing</li>
                <li>School Management Software</li>
              </ul>
            </div>
            <div className='col-span-2'>
              <h5 className="mt-2 md:mt-0 text-xl md:text-2xl font-bold">Useful Links</h5>
              <ul className="text-md text-[#9e95ab] space-y-1 mt-2 leading-[25px] md:leading-[40px]">
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='col-span-3'>
              <h5 className="text-xl md:text-2xl font-bold">Contacts</h5>
              
              <div className='mt-4'>
              <FaLocationCrosshairs className='inline text-lg'/> <h2 className='inline pl-2 text-[16px] md:text-[18px] font-medium'>Office Location</h2>
              <p className="mt-2 text-md text-[#9e95ab] leading-[30px]">#24, MK SQURE, 3rd Floor, Sri Vari Ramakrishna Garden, Coimbatore-641006</p>
              </div>
              <div className='mt-5'>
              <FaPhoneAlt className='inline text-lg'/> <h2 className='inline pl-2 text-[16px] md:text-[18px] font-medium'>Phone No.</h2>
              <p className="mt-2 text-md text-[#9e95ab]"><i className="bi bi-telephone-fill pe-2"></i>+91 91599 13344</p>
              </div>
              <div className='mt-5'>
              <MdEmail className='inline text-lg'/> <h2 className='inline pl-2 text-[16px] md:text-[18px] font-medium'>Email Address</h2>
              <p className="mt-2 text-md text-[#9e95ab]"><i className="bi bi-envelope-at-fill pe-2"></i>info@cloudi5.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='font-Plus-Jakarta bg-[#1c0153] py-5 text-white relative'>
        <div className="container mx-auto px-4 sm:w-[100%] md:w-[90%] lg:w-[85%] flex flex-col xl:flex-row justify-between">
          <div className="text-center py-2 xl:py-0 xl:text-left text-sm md:text-[15px]">Copyright © 2024 <a href="https://www.cloudi5.com/" className="underline">Cloudi5 Technologies</a>. All Rights Reserved.</div>
          <div className="text-center py-2 xl:py-0 xl:text-right text-sm md:text-[15px]">Terms and Conditions | Privacy Policy | Cancellation Policy | Refund Policy</div>
        </div>
        <div className="absolute bottom-30 right-[50px] sm:bottom-20 sm:right-[50px] xl:bottom-10 xl:right-[50%] translate-x-1/2 z-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 transition text-white p-3 w-[50px] h-[50px] md:p-1 xl:w-[70px] xl:h-[70px] rounded-full shadow-lg"
          >
          <span className="absolute w-[25px] h-[25px] md:w-[30px] md:h-[30px] rounded-full bg-[#175cff] opacity-100
            animate-ring
            group-hover:animate-none
          "></span>
            <i class="fa-solid fa-arrow-up-long text-lg xl:text-2xl relative z-10"></i>
          </button>
        </div>
      </section>
    </>
  )
}

export default FooterSection