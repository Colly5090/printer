import React from "react";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative py-10 bg-[url('/media/mainbackground.jpg')] bg-cover bg-center h-screen sm:h-[500px] lg:h-[700px]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">
          {/* Customer Experience Section */}
          <div className="text-center text-white absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-300 w-80 md:w-full">
              Customer Experience is Everything
            </h1>
            <p className="mt-4 text-sm sm:text-sm md:text-sm font-light text-gray-200">
              Embroidery. Customized Apparel. CAD Services. Digital Offset
              Printing
            </p>
            <Link to="/services">
              <button className="mt-8 px-6 py-3 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-200 focus:outline-none">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 sm:px-10 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-10 pl-5 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-20">
            <h2 className="text-2xl text-gray-400 font-semibold">
              Our Services
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
              Full Service <span className="text-orange-500">Print Hub</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Digital Printing */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/media/digitalprinting.jpg"
                alt="Digital Printing"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Digital Printing
                </h3>
                <p className="text-gray-600 mt-2">
                  High-quality digital printing services for all your needs.
                </p>
                <Link to="/services/digital-printing">
                  <button className="mt-4 px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-200 focus:outline-none transition duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 - Embroidery */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/media/embriodery.jpg"
                alt="Embroidery"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Embroidery
                </h3>
                <p className="text-gray-600 mt-2">
                  Custom embroidery services for your apparel and accessories.
                </p>
                <Link to="/services/checkout/Embroidery">
                  <button className="mt-4 px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-200 focus:outline-none transition duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 3 - Document Printing */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/media/documentprinting.jpg"
                alt="Document Printing"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Document Printing
                </h3>
                <p className="text-gray-600 mt-2">
                  Get your documents printed quickly and in excellent quality.
                </p>
                <Link to="/services/document-printing">
                  <button className="mt-4 px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-200 focus:outline-none transition duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="px-6 py-4 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-200 focus:outline-none">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-10 bg-gray-50">
        <About />
      </div>

      {/* Contact Section */}
      <div className="py-10 bg-white">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
