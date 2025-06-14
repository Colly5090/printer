import React, { useState } from "react";
import useCartStore from "../store/cartStore"; // Import the cart store
import { useNavigate } from "react-router-dom";

const ConfirmCheckout = () => {
  const cart = useCartStore((state) => state.cart); // Get cart items
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleRemove = (product) => {
    removeFromCart(product);
    setSuccessMessage(`${product} removed successfully!`);
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Confirmed Payment
        </h1>

        {successMessage && (
          <p className="bg-green-600 font-medium text-white mb-4 p-2">
            {successMessage}
          </p>
        )}

        {/* Checkout Box */}
        <div className="border border-black p-4 rounded-lg">
          {/* Headline Row */}
          <div className="sm:flex text-sm justify-evenly font-normal sm:font-semibold sm:text-lg pb-2 sm:ml-40 ml-10 gap-x-4 sm:gap-x-0">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <hr className="border-t border-black w-full mb-2" />

          {/* Cart Items */}
          <div className="space-y-3">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-evenly items-center border-b py-4 mr-30"
                >
                  <div className="flex gap-2">
                    <p
                      className="text-red-600 hover:bg-red-300 h-5 w-3 rounded-full transition cursor-pointer"
                      onClick={() => handleRemove(item.product)}
                    >
                      X
                    </p>
                    <img
                      src={item.image}
                      alt="image"
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  {/* Product Name */}
                  <span className="text-gray-700 ml-5">{item.product}</span>

                  {/* Price */}
                  <span className="text-gray-700">${item.price}</span>

                  {/* Quantity */}
                  <span className="text-gray-700">{item.quantity}</span>

                  {/* Total */}
                  <span className="text-gray-700 font-bold">${item.total}</span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty</p>
            )}
          </div>
        </div>

        {/* Coupon & Update Cart Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-black py-4 mt-4 gap-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-3 py-2 sm:w-40 w-full"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Apply Coupon
            </button>
          </div>
          <button className="bg-gray-600 text-white px-4 py-2 rounded w-full sm:w-auto">
            Update Cart
          </button>
        </div>

        {/* Proceed to Checkout */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              if (cart.length === 0) {
                alert("Your cart is empty.");
              } else {
                navigate("/order-review-payment");
              }
            }}
            className="bg-green-600 text-white px-6 py-3 rounded shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCheckout;
