import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Header with Gradient Text */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-gradient mb-4">
          Photo, Signage, Giveaways, <br /> You Name It, We’ll Print It.
        </h2>
        <p className="text-2xl text-gray-700">At your service.</p>
      </div>

      {/* Contact Us Button */}
      <div className="mt-6">
        <button className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Contact;
