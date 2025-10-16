import React, { useState } from 'react';

const BestServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const services = [
    {
      icon: 'fa-solid fa-chart-simple',
      title: 'Advanced Analytics',
      desc: 'Synergistically pursue accurate initiatives without economically sound imperatives.',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-100',
      details: ['Data-driven insights', 'AI-based reporting', 'Real-time tracking', 'Predictive modeling', 'Custom dashboards', 'Seamless integration'],
    },
    {
      icon: 'fa-solid fa-gear',
      title: 'Automated Reports',
      desc: 'Generate automated business reports with minimal effort.',
      iconColor: 'text-red-500',
      iconBg: 'bg-red-100',
      details: ['Scheduled delivery', 'Custom templates', 'PDF & Excel formats', 'Smart summaries', 'Email integrations', 'Time-saving setup'],
    },
    {
      icon: 'fa-solid fa-route',
      title: 'User Journey Flow',
      desc: 'Visualize and analyze your customer journeys with precision.',
      iconColor: 'text-green-500',
      iconBg: 'bg-green-100',
      details: ['Funnel views', 'Drop-off analysis', 'Conversion tracking', 'Custom stages', 'Real-time behavior', 'Multi-device tracking'],
    },
    {
      icon: 'fa-solid fa-vial',
      title: 'Compare A/B Testing',
      desc: 'Easily run and compare multiple variants of your experiments.',
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-100',
      details: ['Variant tracking', 'Goal metrics', 'Control groups', 'Easy segmentation', 'Detailed reporting', 'Statistical confidence'],
    },
    {
      icon: 'fa-solid fa-pen-nib',
      title: 'Easy Customization',
      desc: 'Tailor every component to match your brand and audience.',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-100',
      details: ['Drag & drop builder', 'Theme support', 'Custom components', 'Style presets', 'Live previews', 'Reusable layouts'],
    },
  ];

  // Calculate layout order
  const getGridOrder = () => {
    const order = [...services.keys()];
    if (expandedIndex !== -1) {
      const [expanded] = order.splice(expandedIndex, 1);
      const column = expandedIndex % 3;
      order.splice(column, 0, expanded);
    }
    return order;
  };

  const gridOrder = getGridOrder();

  return (
    <>
    <section id="bestservice-page" className="font-Plus-Jakarta py-10 bg-white">
      <div className="container mx-auto px-4 sm:w-full md:w-11/12 lg:w-4/5">
        <div className="text-center mb-10">
          <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[56px] font-extrabold leading-tight mx-auto max-w-4xl">
            Best Services Grow Your Business Value
          </h1>
          <h4 className="text-sm sm:text-base md:text-lg mt-2 text-gray-600">
            Globally actualize cost-effective leadership skills with resource-maximizing strategies.
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr] gap-6">
          {gridOrder.map((index) => {
            const service = services[index];
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between transition-all duration-300 ${
                  isExpanded ? 'row-span-2' : ''
                }`}
              >
                <div className={`text-2xl sm:text-3xl mb-4 w-12 h-12 sm:w-14 sm:h-14 ${service.iconBg} rounded-full flex justify-center items-center`}>
                  <i className={`${service.icon} ${service.iconColor} text-lg sm:text-xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold pb-2">{service.title}</h3>
                <p className={`text-sm sm:text-base text-gray-600 mb-4 ${!isExpanded ? 'line-clamp-2' : ''}`}>{service.desc}</p>

                {isExpanded && (
                  <>
                    <h3 className="font-semibold pt-2 pb-2 text-base sm:text-lg">Included with...</h3>
                    <ul className="list-none text-gray-700 space-y-1 pb-4 text-sm sm:text-base">
                      {service.details.map((item, i) => (
                        <li key={i}>
                          <i className="fa-regular fa-circle-check mr-2 text-blue-500"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <button
                  onClick={() => handleToggle(index)}
                  className="inline-flex items-center text-blue-600 hover:underline mt-auto text-sm sm:text-base"
                >
                  View Details
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
    <hr className="mx-auto max-w-7xl my-8 sm:mt-10 border-gray-300" />
    </>
  );
};

export default BestServices;
