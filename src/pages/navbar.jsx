import React, { useState } from 'react';
import logo from '../assets/images/cloudi5-logo.png';
import navImg from '../assets/images/nav-portfolio1.jpg';
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add this line

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null); // Close any dropdown when mobile menu is toggled
  };

  return (
        <nav className="font-Plus-Jakarta fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md shadow z-50">
          <div className="container w-[100%] sm:w-[100%] md:w-[90%] lg:w-[85%] mx-auto flex items-center justify-between py-4 px-4 sm:px-2">
            <a href="#">
              <img src={logo} alt="Cloudi5 Logo" className="h-15" />
            </a>
    
            <div className="hidden lg:flex space-x-6 relative">
              {/* Demos Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('demos')}
                  className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6]"
                >
                  Demos <i className="bi bi-chevron-down"></i>
                </button>
                {openDropdown === 'demos' && (
                  <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg w-[600px] p-6 grid grid-cols-2 gap-4 z-40">
                    <div>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#7b5dd6]">Classic Default</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">Creative Agency</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">Digital Agency <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">Design Agency <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">SEO Agency <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.1</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.2</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.3</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.4 <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.5</a></li>
                      </ul>
                    </div>
                    <div className="col-span-2 border-t pt-4 flex justify-between items-center">
                      <div>
                        <h5 className="text-sm font-semibold">Ready to get started?</h5>
                        <p className="text-xs text-gray-600">Take your documents to the next level with Mizzle</p>
                      </div>
                      <button className="bg-[#7b5dd6] text-white text-sm px-4 py-2 rounded-md hover:bg-[#674bc2]">Start now</button>
                    </div>
                  </div>
                )}
              </div>
    
              {/* Pages Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('pages')}
                  className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6]"
                >
                  Pages <i className="bi bi-chevron-down"></i>
                </button>
                {openDropdown === 'pages' && (
                  <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg w-48 p-4 z-40">
                    <ul className="space-y-2 text-sm">
                      <li><a href="#" className="hover:text-[#7b5dd6]">About</a></li>
                      <li><a href="#" className="hover:text-[#7b5dd6]">Experience</a></li>
                      <li><a href="#" className="hover:text-[#7b5dd6]">Our Services</a></li>
                      <li><a href="#" className="hover:text-[#7b5dd6]">Testimonial</a></li>
                      <li><a href="#" className="hover:text-[#7b5dd6]">Footer</a></li>
                    </ul>
                  </div>
                )}
              </div>
    
              {/* Project Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('project')}
                  className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6]"
                >
                  Project <i className="bi bi-chevron-down"></i>
                </button>
                {openDropdown === 'project' && (
                  <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg w-[720px] p-6 z-40 grid grid-cols-3 gap-6">
                    {[1, 2].map((i) => (
                      <div key={i}>
                        <img src={navImg} alt="nav" className="rounded-lg mb-2" />
                        <h5 className="text-sm font-semibold">Ceremony Worthy of Time</h5>
                        <p className="text-xs text-gray-600">We help our customers better manage their web presence.</p>
                        <a href="#" className="text-[#7b5dd6] text-sm hover:underline">Learn more</a>
                      </div>
                    ))}
                    <div>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#7b5dd6]">About</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">Experience</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">Our Services</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">Testimonial</a></li>
                        <li><a href="#" className="hover:text-[#7b5dd6]">Footer</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
    
              <a href="#" className="text-gray-800 hover:text-[#7b5dd6]">Megamenu</a>
              <a href="#" className="text-gray-800 hover:text-[#7b5dd6]">Contact us</a>
            </div>
    
            {/* Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <button className="border border-[#7b5dd6] text-[#7b5dd6] px-4 py-2 rounded-md hover:bg-[#7b5dd6] hover:text-white">Sign up</button>
              <button className="bg-[#7b5dd6]/95 text-white px-4 py-2 rounded-md hover:bg-[#7b5dd6]/100 transition">Buy now!</button>
            </div>
            

        {/* responsive design */}
        <div className='lg:hidden text-2xl' onClick={toggleMobileMenu}>
          <CgMenu />
        </div>
        {mobileMenuOpen && (
        <div className="flex-row lg:hidden top-[90px] right-[0px] w-[40%] p-2 rounded bg-black/2 backdrop-blur-lg absolute">
          {/* Demos Dropdown */}
          <div className="relative group px-2 py-2 hover:bg-white/20 hover:rounded">
                    <button
                      onClick={() => toggleDropdown('demos')}
                      className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6] "
                    >
                      Demos <i className="bi bi-chevron-down"></i>
                    </button>
                    {openDropdown === 'demos' && (
                      <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-[310px] p-6 z-40">
                        <div>
                          <ul className="space-y-2 pb-4 text-sm">
                            <li><a href="#" className="hover:text-[#7b5dd6]">Classic Default</a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">Creative Agency</a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">Digital Agency <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">Design Agency <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">SEO Agency <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                          </ul>
                        </div>
                        <hr/>
                        <div className='border-t'>
                          <ul className="space-y-2 py-4 text-sm">
                            <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.1</a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.2</a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.3</a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.4 <span className="ml-1 text-xs text-white bg-purple-500 px-2 py-0.5 rounded">New</span></a></li>
                            <li><a href="#" className="hover:text-[#7b5dd6]">SaaS v.5</a></li>
                          </ul>
                        </div>
                        <div className="col-span-2 border-t pt-4 flex justify-between items-center">
                          <div>
                            <h5 className="text-sm font-semibold">Ready to get started?</h5>
                            <p className="text-xs text-gray-600">Take your documents to the next level with Mizzle</p>
                          </div>
                          <button className="bg-[#7b5dd6] text-white text-sm px-4 py-2 rounded-md hover:bg-[#674bc2]">Start</button>
                        </div>
                      </div>
                    )}
          </div>
        
          {/* Pages Dropdown */}
          <div className="relative group px-2 py-2 hover:bg-white/20 hover:rounded">
            <button
            onClick={() => toggleDropdown('pages')}
            className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6]"
            >
              Pages <i className="bi bi-chevron-down"></i>
            </button>
            {openDropdown === 'pages' && (
                      <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-48 p-4 z-40">
                        <ul className="space-y-2 text-sm">
                          <li><a href="#" className="hover:text-[#7b5dd6]">About</a></li>
                          <li><a href="#" className="hover:text-[#7b5dd6]">Experience</a></li>
                          <li><a href="#" className="hover:text-[#7b5dd6]">Our Services</a></li>
                          <li><a href="#" className="hover:text-[#7b5dd6]">Testimonial</a></li>
                          <li><a href="#" className="hover:text-[#7b5dd6]">Footer</a></li>
                        </ul>
                      </div>
                    )}
          </div>
        
          {/* Project Dropdown */}
          <div className="relative group px-2 py-2 hover:bg-white/20 hover:rounded">
            <button
              onClick={() => toggleDropdown('project')}
              className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6]"
            >
              Project <i className="bi bi-chevron-down"></i>
            </button>
            {openDropdown === 'project' && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-[310px] max-h-[400px] overflow-y-auto p-6 z-40 flex flex-col gap-6">
              {[1, 2].map((i) => (
                <div key={i}>
                  <img src={navImg} alt="nav" className="rounded-lg mb-2" />
                  <h5 className="text-sm font-semibold">Ceremony Worthy of Time</h5>
                  <p className="text-xs text-gray-600">We help our customers better manage their web presence.</p>
                  <a href="#" className="text-[#7b5dd6] text-sm hover:underline">Learn more</a>
                  <hr className='mt-4'/>
                </div>
              ))}
              <div>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#7b5dd6]">About</a></li>
                  <li><a href="#" className="hover:text-[#7b5dd6]">Experience</a></li>
                  <li><a href="#" className="hover:text-[#7b5dd6]">Our Services</a></li>
                  <li><a href="#" className="hover:text-[#7b5dd6]">Testimonial</a></li>
                  <li><a href="#" className="hover:text-[#7b5dd6]">Footer</a></li>
                </ul>
              </div>
            </div>
            )}
          </div>
          {/* Megamenu Dropdown */}
          <div className="relative group px-2 py-2 hover:bg-white/20 hover:rounded">
            <button
            onClick={() => toggleDropdown('project')}
            className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6]"
            >
              Megamenu <i className="bi bi-chevron-down"></i>
            </button>
          </div>
          {/* Contact Dropdown */}
          <div className="relative group px-2 py-2 hover:bg-white/20 hover:rounded">
            <button
            onClick={() => toggleDropdown('project')}
            className="flex items-center gap-1 text-gray-800 hover:text-[#7b5dd6]"
            >
              Contact us<i className="bi bi-chevron-down"></i>
            </button>
          </div>
        
          </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
