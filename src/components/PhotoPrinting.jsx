import React from "react";
import HoverOverlay from "./HoverOverlay";
import { Link } from "react-router-dom";

function PhotoPrinting() {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-left text-3xl font-light mb-1">Photo Printing</h1>
      <p className="text-left text-gray-600 mb-8">Showing all 2 results</p>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <Link to="/services/photo-printing/1×1 3pcs">
          <div className="border rounded-lg overflow-hidden">
            {/* Image Container */}
            <div className="relative w-full h-48 flex items-center justify-center group">
              {/* Placeholder Content */}
              <span className="text-gray-600">
                <img
                  src="/media/photocopyBlack.jpg"
                  alt="black"
                  className="w-full h-48 object-contain"
                />
              </span>
              <HoverOverlay />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">1×1 3pcs</h2>
              <p className="text-gray-600">$20.00</p>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/services/photo-printing/Rush ID">
          <div className="border rounded-lg overflow-hidden">
            {/* Image Container */}
            <div className="relative w-full h-48 flex items-center justify-center group">
              {/* Placeholder Content */}
              <span className="text-gray-600">
                <img
                  src="/media/photocopyBlack.jpg"
                  alt="black"
                  className="w-full h-48 object-contain"
                />
              </span>
              <HoverOverlay />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">Rush ID</h2>
              <p className="text-gray-600">$15.00</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PhotoPrinting;
