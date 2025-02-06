import React from "react";

function About() {
  return (
    <div className="py-16 px-6 bg-about-custom">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="text-gray-500 mt-4 max-w-4xl mx-auto text-2xl">
          E3 IS A DYNAMIC COMPANY THAT HAS ESTABLISHED ITSELF AS ONE OF THE MOST
          PROGRESSIVE AND FORMIDABLE CREATIVE SOLUTION COMPANIES IN THE
          PHILIPPINES.
        </p>
      </div>

      {/* Company Story */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-3xl font-semibold mb-6 text-blue-500">
          Our Journey
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Established in 1996, E3 started as a small net café in the heart of
          Quezon City. A few years later, the company ventured into printing and
          made substantial investments in printing machines capable of mass
          producing printed pictures, personalized t-shirts, bags, and souvenirs
          tailored to our clients' preferences.
        </p>
      </div>

      {/* Key Milestones */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800">1996</h4>
          <p className="text-gray-600">
            Company established as a small net café.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800">2000</h4>
          <p className="text-gray-600">Expanded into the printing business.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800">Present Day</h4>
          <p className="text-gray-600">
            Leading the way in creative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
