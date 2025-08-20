import React from "react";
import { Link } from "react-router-dom";
import { WrenchIcon, ShieldCheckIcon, ClockIcon } from "lucide-react";
const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kanchana Rangajeewa
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Professional Electrician
            </h2>
            <p className="text-xl mb-8">
              Reliable Electrical Services for Homes & Businesses
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block"
            >
              Request a Service
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/src/img/pro.jpg"
              alt="Professional Electrician Kanchana Rangajeewa"
              className="rounded-lg shadow-xl max-w-full h-auto"
              width="500"
              height="400"
            />
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Welcome to My Electrical Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 10 years of experience in the electrical industry, I
              provide high-quality electrical services for residential and
              commercial clients. My commitment is to deliver safe, reliable,
              and efficient electrical solutions tailored to your specific
              needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-blue-600 flex justify-center mb-4">
                  <WrenchIcon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
                <p className="text-gray-600">
                  Certified professional with extensive experience in all
                  electrical systems.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-blue-600 flex justify-center mb-4">
                  <ShieldCheckIcon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  All work completed to the highest safety standards and
                  building codes.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-blue-600 flex justify-center mb-4">
                  <ClockIcon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable</h3>
                <p className="text-gray-600">
                  Punctual service with clear communication and on-time project
                  completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Services Offered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "House Wiring",
              "Lighting Installation",
              "Electrical Repairs",
              "Panel Upgrades",
              "CCTV & Security",
              "Industrial Services",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {service}
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional {service.toLowerCase()} services with attention
                  to detail and quality workmanship.
                </p>
                <Link
                  to="/services"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me today for a consultation and free quote on your
            electrical project.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
          >
            Contact Now
          </Link>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
