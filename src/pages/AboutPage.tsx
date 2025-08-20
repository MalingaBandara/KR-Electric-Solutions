import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
const AboutPage = () => {
  const qualifications = ['Licensed Master Electrician', 'Certified Electrical Inspector', 'National Electrical Code (NEC) Certified', 'Commercial & Residential Electrical Specialist', 'OSHA Safety Certified', 'Energy Efficiency Consultant'];
  return <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl mt-4">
            Learn more about my experience and qualifications
          </p>
        </div>
      </section>
      {/* Biography Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <img src="/src/img/pro.jpg" alt="Kanchana Rangajeewa - Professional Electrician" className="rounded-lg shadow-lg max-w-full h-auto" width="500" height="600" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Kanchana Rangajeewa
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 10 years of experience in the electrical industry,
                I've established myself as a trusted electrician serving both
                residential and commercial clients. My journey in this field
                began with a passion for understanding how electrical systems
                work and a commitment to providing safe, reliable solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                After completing my formal education and apprenticeship, I
                worked with several established electrical companies before
                starting my own business. This experience has given me a
                comprehensive understanding of various electrical systems and
                the ability to tackle projects of any size.
              </p>
              <p className="text-lg text-gray-600">
                My approach combines technical expertise with excellent customer
                service. I believe in clear communication, punctuality, and
                delivering work that exceeds expectations. Whether you need a
                simple repair or a complete electrical system installation, I'm
                dedicated to providing you with the highest quality service.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Qualifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Qualifications & Certifications
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4">
                {qualifications.map((qual, index) => <li key={index} className="flex items-start">
                    <CheckCircleIcon className="text-green-500 mr-3 flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-700">{qual}</span>
                  </li>)}
              </ul>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 font-medium">
                I'm committed to ongoing education and staying current with the
                latest electrical technologies and safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            My Professional Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Safety First
              </h3>
              <p className="text-gray-600">
                Safety is my top priority. I adhere to all electrical codes and
                safety standards to ensure your property and loved ones are
                protected.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Quality Workmanship
              </h3>
              <p className="text-gray-600">
                I take pride in delivering high-quality work that's built to
                last, using premium materials and proven techniques.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your satisfaction is guaranteed. I'm not happy until you're
                completely satisfied with the work performed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;