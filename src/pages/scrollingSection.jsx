import React from 'react';
import paypal from '../assets/images/paypal-logo.png';
import razorpay from '../assets/images/razorpay-logo.png';
import stripe from '../assets/images/stripe-logo.png';
import payu from '../assets/images/payu-logo.png';
import instamojo from '../assets/images/instamojo-logo.png';
import googleAnalytics from '../assets/images/google-analytics-logo.png';
import mailgun from '../assets/images/mailgun-logo.png';
import nexmo from '../assets/images/nexmo-logo.png';

const ScrollingSection = () => {
  const logos = [
    { src: paypal, alt: 'paypal' },
    { src: razorpay, alt: 'razorpay' },
    { src: stripe, alt: 'stripe' },
    { src: payu, alt: 'payu' },
    { src: instamojo, alt: 'instamojo' },
    { src: googleAnalytics, alt: 'google-analytics' },
    { src: mailgun, alt: 'mailgun' },
    { src: nexmo, alt: 'nexmo' },
  ];

  return (
    <>
    <section id="scroll-section" className="py-8 sm:py-10 md:py-14 bg-white">
      <div className="mx-auto max-w-[95%] md:max-w-6xl overflow-hidden">
        <div
          className="flex gap-10 sm:gap-14 md:gap-20 animate-scroll whitespace-nowrap"
          style={{ animationDuration: '15s' }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-10 sm:gap-14 md:gap-20 shrink-0">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
    <hr className="mx-auto max-w-7xl mb-8 sm:mt-10 border-gray-300" />
    </>
  );
};

export default ScrollingSection;
