import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    // In a real application, you would send the form data to a server here
    // For this example, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  return <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-xl mt-4">
            Get in touch for electrical services or inquiries
          </p>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send Me a Message
              </h2>
              {formStatus.submitted && <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  {formStatus.message}
                </div>}
              {formStatus.error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                  {formStatus.message}
                </div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center">
                  <SendIcon size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-6">
                  <PhoneIcon size={24} className="text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600"> +94 (716) 161-573</p>
                    <p className="text-gray-600 mt-1">
                      Available Mon-Fri, 8am-6pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <MailIcon size={24} className="text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">contact@kanchana.com</p>
                    <p className="text-gray-600 mt-1">
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon size={24} className="text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">E 1/A, Beminiwatta,</p>
                    <p className="text-gray-600">Mawanella</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Business Hours
                </h3>
                <ul className="bg-gray-50 rounded-lg shadow-md p-6">
                  <li className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </li>
                  <li className="mt-4 text-blue-600 font-medium">
                    24/7 Emergency Service Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      {false && (
  <section className="py-8 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="w-full h-80 bg-gray-200 rounded flex items-center justify-center">
          <p className="text-gray-500 text-center">
            Google Maps would be embedded here
            <br />
            showing the business location
          </p>
        </div>
      </div>
    </div>
  </section>
)}

    </div>;
};
export default ContactPage;