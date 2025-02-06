import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useCartStore from "../store/cartStore";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const cartCount = useCartStore((state) => state.cartCount);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility when hamburger is clicked
  };

  return (
    <header className="shadow sticky z-50 top-0 px-8">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Hamburger and Cart Icons on Small Screens */}
          <div className="lg:hidden flex items-center space-x-4">
            {" "}
            {/* space-x-4 for spacing */}
            <div
              onClick={toggleMenu} // Onclick event for showing the overlay
              className="text-gray-800 hover:text-orange-700 cursor-pointer"
            >
              <i className="fas fa-bars text-xl"></i> {/* Hamburger icon */}
            </div>
            <Link to="/cart" className="text-orange-800 hover:text-gray-700">
              <i className="fas fa-shopping-cart text-xl"></i> {/* Cart icon */}
              {/* Cart Count Badge */}
              {cartCount > 0 && (
                <span className="absolute top-4 right-12 bg-purple-500 text-white text-xs font-normal w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Nav links shown on larger screens */}
          <div
            className={`hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
            id="desktop-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-gray-700" : "text-orange-700"
                    } font-extrabold lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-gray-700" : "text-orange-700"
                    } font-extrabold lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-gray-700" : "text-orange-700"
                    } font-extrabold lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-gray-700" : "text-orange-700"
                    } font-extrabold lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-gray-700" : "text-orange-700"
                    } font-extrabold lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  ADMIN
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center">
              <Link
                to="/services/confirm-checkout"
                className="text-orange-800 hover:text-gray-700 ml-4"
              >
                <i className="fas fa-shopping-cart text-xl"></i>

                {/* Cart Count Badge */}
                {cartCount > 0 && (
                  <span className="absolute top-4 right-12 bg-purple-500 text-white text-xs font-normal w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-19 left-20 right-10 bg-white shadow-lg py-6 z-50">
          <ul className="flex flex-col text-left font-medium space-y-4">
            <li>
              <NavLink
                to="/"
                className="py-2 px-4 text-orange-700 hover:text-gray-700 border-b border-gray-200"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="py-2 px-4 text-orange-700 hover:text-gray-700 border-b border-gray-200"
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="py-2 px-4 text-orange-700 hover:text-gray-700 border-b border-gray-200"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="py-2 px-4 text-orange-700 hover:text-gray-700 border-b border-gray-200"
              >
                CONTACT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className="py-2 px-4 text-orange-700 hover:text-gray-700 border-b border-gray-200"
              >
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
