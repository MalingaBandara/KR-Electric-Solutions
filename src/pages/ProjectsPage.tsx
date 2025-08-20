import React, { useState } from 'react';
import { StarIcon } from 'lucide-react';
const ProjectsPage = () => {
  // Sample project data
  const projects = [{
    id: 1,
    title: 'Complete Home Rewiring',
    description: 'Full electrical system upgrade for a 2,500 sq ft home. Replaced outdated wiring, installed new panel, and added modern outlets throughout.',
    beforeImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    afterImage: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    category: 'Residential'
  }, {
    id: 2,
    title: 'Commercial Lighting Installation',
    description: 'Design and installation of energy-efficient LED lighting system for a retail store. Reduced energy consumption by 40% while improving visibility.',
    beforeImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    afterImage: 'https://images.unsplash.com/photo-1604328471151-b52226907017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Commercial'
  }, {
    id: 3,
    title: 'Security System Installation',
    description: 'Installation of comprehensive CCTV and alarm system for a small business. Included 8 cameras, motion sensors, and smartphone integration.',
    beforeImage: 'https://images.unsplash.com/photo-1570044389283-ec0105afd236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    afterImage: 'https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    category: 'Security'
  }, {
    id: 4,
    title: 'Industrial Machinery Wiring',
    description: 'Electrical wiring and setup for new manufacturing equipment. Ensured proper power distribution and safety systems for heavy machinery.',
    beforeImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    afterImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    category: 'Industrial'
  }];
  // Sample testimonials
  const testimonials = [{
    id: 1,
    name: 'John Smith',
    role: 'Homeowner',
    content: 'Kanchana did an excellent job rewiring our entire home. He was professional, knowledgeable, and completed the work on time and within budget.',
    rating: 5
  }, {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'We hired Kanchana to install new lighting in our retail store. The result was amazing - our store looks more modern and our electricity bill has decreased significantly.',
    rating: 5
  }, {
    id: 3,
    name: 'Michael Brown',
    role: 'Property Manager',
    content: "Kanchana has been our go-to electrician for several years now. His work is always top-notch and he's very responsive to emergency calls.",
    rating: 4
  }];
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  return <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-xl mt-4">
            View my past work and client testimonials
          </p>
        </div>
      </section>
      {/* Projects Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Residential', 'Commercial', 'Industrial', 'Security'].map(category => <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-md ${filter === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}>
                  {category}
                </button>)}
          </div>
        </div>
      </section>
      {/* Projects Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <div className="relative">
                      <img src={project.beforeImage} alt={`${project.title} - Before`} className="w-full h-48 object-cover" />
                      <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1">
                        Before
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <img src={project.afterImage} alt={`${project.title} - After`} className="w-full h-48 object-cover" />
                      <div className="absolute top-0 left-0 bg-green-600 bg-opacity-70 text-white text-xs font-bold px-2 py-1">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} fill={i < testimonial.rating ? 'currentColor' : 'none'} />)}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default ProjectsPage;