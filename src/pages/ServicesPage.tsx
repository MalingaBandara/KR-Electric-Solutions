import React from 'react';
import { HomeIcon, LampIcon, WrenchIcon, ActivityIcon, ShieldIcon, FactoryIcon } from 'lucide-react';
const ServicesPage = () => {
  const services = [{
    title: 'House Wiring',
    description: 'Complete wiring solutions for new constructions, renovations, and upgrades. I ensure all electrical systems are installed according to code with a focus on safety and efficiency.',
    icon: <HomeIcon size={40} className="text-blue-600" />
  }, {
    title: 'Lighting Installation',
    description: 'From basic fixtures to complex lighting systems, I offer expert installation services for indoor and outdoor lighting. This includes energy-efficient options to help reduce your electricity costs.',
    icon: <LampIcon size={40} className="text-blue-600" />
  }, {
    title: 'Electrical Repairs',
    description: "Fast, reliable repairs for all electrical issues. Whether it's a faulty outlet, circuit breaker problems, or electrical malfunctions, I provide prompt and effective solutions.",
    icon: <WrenchIcon size={40} className="text-blue-600" />
  }, {
    title: 'Panel Upgrades',
    description: "Upgrade your electrical panel to safely handle your home's power demands. Modern homes require more electricity than ever, and an outdated panel can be a safety hazard.",
    icon: <ActivityIcon size={40} className="text-blue-600" />
  }, {
    title: 'CCTV & Security Systems',
    description: 'Protect your property with professional installation of security cameras, alarm systems, and smart home security integration. Custom solutions designed for your specific needs.',
    icon: <ShieldIcon size={40} className="text-blue-600" />
  }, {
    title: 'Industrial Electrical Services',
    description: 'Comprehensive electrical services for industrial facilities, including machinery installation, maintenance, troubleshooting, and emergency repairs to minimize downtime.',
    icon: <FactoryIcon size={40} className="text-blue-600" />
  }];
  return <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">My Services</h1>
          <p className="text-xl mt-4">
            Professional electrical services for all your needs
          </p>
        </div>
      </section>
      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Comprehensive Electrical Services
            </h2>
            <p className="text-lg text-gray-600">
              I offer a wide range of electrical services for residential and
              commercial clients. All work is performed to the highest standards
              of quality and safety.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            My Working Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  We'll discuss your electrical needs, assess the situation, and
                  provide you with a detailed quote.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Planning & Preparation
                </h3>
                <p className="text-gray-600">
                  I'll create a detailed plan for your project, including
                  materials needed and timeline for completion.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Professional Execution
                </h3>
                <p className="text-gray-600">
                  The work is performed with attention to detail, following all
                  safety protocols and industry standards.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Final Inspection & Satisfaction
                </h3>
                <p className="text-gray-600">
                  After completion, we'll do a final walkthrough to ensure
                  everything meets your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Electrical Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me today to discuss your project and receive a free quote.
          </p>
          <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors inline-block">
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>;
};
export default ServicesPage;