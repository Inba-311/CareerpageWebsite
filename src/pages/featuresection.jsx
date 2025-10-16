import React from "react";
import featureImg1 from "../assets/images/feature_img1.png";
import featureImg11 from "../assets/images/feature_img11.png";
import featureImg2 from "../assets/images/feature_img2.png";
import featureImg22 from "../assets/images/feature_img22.png";
import featureImg3 from "../assets/images/feature_img3.png";
import featureImg33 from "../assets/images/feature_img33.png";

const features = [
  {
    id: "manage-content1",
    title: "Property management software for any portfolio",
    description:
      "Built by owners and property managers just like you. Deliver a better owner experience, more value, transparency, and trust.",
    list: [
      "Get maintenance requests online",
      "Customizable chart of accounts",
      "Send automated payment reminders",
    ],
    images: [featureImg1, featureImg11],
    gradient: "from-[#7777ff] to-[#b125ef]",
    top: "top-0",
    z: "z-[-30]",
  },
  {
    id: "manage-content2",
    title: "Property management software for any portfolio",
    description:
      "Built by owners and property managers just like you. Deliver a better owner experience, more value, transparency, and trust.",
    list: [
      "Get maintenance requests online",
      "Customizable chart of accounts",
      "Send automated payment reminders",
    ],
    images: [featureImg2, featureImg22],
    gradient: "from-[#f750aa] to-[#fcb150]",
    top: "top-2",
    z: "z-[-20]",
  },
  {
    id: "manage-content3",
    title: "Property management software for any portfolio",
    description:
      "Built by owners and property managers just like you. Deliver a better owner experience, more value, transparency, and trust.",
    list: [
      "Get maintenance requests online",
      "Customizable chart of accounts",
      "Send automated payment reminders",
    ],
    images: [featureImg3, featureImg33],
    gradient: "from-[#ff7b01] to-[#ffd338]",
    top: "top-4",
    z: "z-[-10]",
  },
];

const FeatureSection = () => {
  return (
    <section id="feature-page" className="py-20 font-Plus-Jakarta">
      <div className="container mx-auto text-center">
        <h1 className="mx-auto mt-5 font-extrabold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-[38px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] max-w-[90%] md:max-w-[75%]">
          Manage Any Property. Anytime, Anywhere.
        </h1>
        <h4 className="text-md sm:text-lg my-8 max-w-2xl mx-auto">
          Property managers, owners, and accountants worldwide use PicmaticWeb
          to manage any combination of properties.
        </h4>
      </div>

      <div className="w-full sm:w-[100%] md:w-[90%] lg:w-[85%] mx-auto space-y-12">
        {features.map((feature, index) => {
          const scaleClass =
            index === 0
            ? "scale-100 md:scale-[0.96] m-4"
            : index === 1
            ? "scale-100 md:scale-[0.98] m-4"
            : "scale-100 md:scale-100 m-4";
            

          return (
            <div
              key={feature.id}
              className={`relative lg:sticky ${feature.top} ${feature.z} bg-gradient-to-b ${feature.gradient} 
              ${scaleClass} rounded-xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-evenly gap-8 
              text-white transition-transform duration-500`}
            >
              {index % 2 === 1 && <FeatureImage images={feature.images} />}

              <div className="m-8 w-full lg:w-[55%] flex flex-col justify-center items-start">
                <h2 className="text-[24px] font-bold md:text-[28px] mb-4">
                  {feature.title}
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-5">
                  {feature.description}
                </p>
                <ul className="list-none space-y-2 text-[17px] md:text-[19px] py-2">
                  {feature.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-white text-lg"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-[#7b5dd6] hover:text-white font-medium">
                  Request demo
                </button>
              </div>

              {index % 2 === 0 && <FeatureImage images={feature.images} />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const FeatureImage = ({ images }) => {
  return (
    <div className="relative w-full lg:w-[40%] flex justify-center items-center p-5">
      <img
        src={images[0]}
        alt="feature-img"
        className="rounded-xl w-[85%] md:w-[80%] lg:w-[90%] max-w-[400px]"
      />
      <img
        src={images[1]}
        alt="feature-img-anim"
        className="absolute right-[20px] top-[30px] h-1/2 md:h-1/2 lg:h-2/3 animate-moveUpDown rounded-xl shadow-xl"
      />
    </div>
  );
};

export default FeatureSection;
