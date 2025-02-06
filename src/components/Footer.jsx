import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-8 rounded-t-2xl">
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="flex flex-wrap justify-center items-center gap-20">
          {/* Home */}
          <div className="flex flex-col items-center">
            <FaHome className="text-3xl mb-2" />
            <span className="font-bold">HEAD OFFICE</span>
            <span>4B Congressional Ave. Ext,</span>
            <span>Culiat, Quezon City</span>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhone className="text-3xl mb-2" />
            <span className="font-bold">CALL US</span>
            <span>+1 234 567 890</span>
            <span>(233) 5 925 6233</span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl mb-2" />
            <span className="font-bold">EMAIL US</span>
            <span>info@example.com</span>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center">
            <FaFacebook className="text-3xl mb-2" />
            <span className="font-bold">FACEBOOK</span>
            <span>@E3Print</span>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <FaInstagram className="text-3xl mb-2" />
            <span className="font-bold">INSTAGRAM</span>
            <span>@E3Print1</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-custom-gradient mt-10 py-5 relative top-10">
        <div className="container mx-auto text-center">
          <h1 className="font-bold text-lg">POWERED BY KINGBIBLE TECH</h1>
          <p className="text-sm mt-2">
            &copy; 2024 - {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
