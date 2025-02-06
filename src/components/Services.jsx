import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "Photocopy",
      image: "/media/photocopyBlack.jpg",
      path: "/services/photocopy",
    },
    {
      name: "Photo Printing",
      image: "/media/photocopycoloured.jpeg",
      path: "/services/photo-printing",
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="py-5 font-bold text-xl">Services</h1>
        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Service Image */}
              <Link to={service.path} className="w-full h-40 mb-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </Link>
              {/* Service Name */}
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
