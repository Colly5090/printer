import React, { useState, useEffect } from "react";
import useCartStore from "../store/cartStore";
import { useNavigate } from "react-router-dom";
import submitOrder from "./submitOrder";

const OrderReview = () => {
  const cart = useCartStore((state) => state.cart);
  const userInfo = useCartStore((state) => state.userInfo);
  const setUserInfo = useCartStore((state) => state.setUserInfo);
  const clearCart = useCartStore((state) => state.clearCart);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [mobileMoneyOption, setMobileMoneyOption] = useState("");
  //const [phoneNumber, setPhoneNumber] = useState("");

  // Handle user info change
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitOrder(); // Call the submitOrder function
    clearCart();
    alert("Order Submitted Successfully");
    navigate("/");
    setIsSubmitting(false);
  };

  // Calculate total
  const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.total), 0);
  const total = subtotal; // Modify if needed (e.g., add tax)

  // Store the total amount in the store
  useEffect(() => {
    setUserInfo({ totalAmount: total }); // Update totalAmount in userInfo
  }, [total, setUserInfo]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-10">
          Order Review & Payment
        </h1>

        {/* Order Table */}
        <div className="border border-gray-300 rounded-lg p-4 mb-6">
          {/* Table Headings */}
          <div className="flex justify-between font-semibold text-lg pb-3">
            <span className="w-1/2">Product</span>
            <span className="w-1/2 text-right">Total</span>
          </div>
          <hr className="border-t border-gray-300" />

          {/* Order Items */}
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between py-3">
              <span className="w-1/2">{item.product}</span>
              <span className="w-1/2 text-right">${item.total}</span>
            </div>
          ))}

          <hr className="border-t border-gray-300" />

          {/* Subtotal & Total */}
          <div className="flex justify-between py-3">
            <span className="w-1/2 font-semibold">Subtotal</span>
            <span className="w-1/2 text-right">${subtotal.toFixed(2)}</span>
          </div>
          <hr className="border-t border-gray-300" />
          <div className="flex justify-between py-3">
            <span className="w-1/2 font-semibold text-lg">Total</span>
            <span className="w-1/2 text-right text-lg">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Personal Information
          </h2>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold mb-1"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              type="text"
              value={userInfo.fullName}
              onChange={handleUserInfoChange}
              placeholder="Enter full name"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-semibold mb-1"
            >
              Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              name="address"
              required
              type="text"
              value={userInfo.address}
              onChange={handleUserInfoChange}
              placeholder="Enter address"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phoneNumber"
              required
              type="tel"
              placeholder="Enter phone number"
              value={userInfo.phoneNumber}
              onChange={handleUserInfoChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-semibold mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              required
              placeholder="Enter city"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email Address(Optional)
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter email address"
              value={userInfo.email}
              onChange={handleUserInfoChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Select Delivery Method
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="pickup"
                  className="mr-2"
                />
                <span>Pickup</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="delivery"
                  className="mr-2"
                />
                <span>Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Select Payment Method
          </h2>

          <div className="space-y-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="Bank Payment"
                checked={paymentMethod === "Bank Payment"}
                onChange={() => setPaymentMethod("Bank Payment")}
                className="form-radio text-blue-600"
              />
              <span>Bank Payment</span>
              <i className="fas fa-university text-blue-600 text-xl"></i>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="Mobile Money"
                checked={paymentMethod === "Mobile Money"}
                onChange={() => setPaymentMethod("Mobile Money")}
                className="form-radio text-blue-600"
              />
              <span>Mobile Money</span>
            </label>
            {/* Show Mobile Money Options when Mobile Money is selected */}
            {paymentMethod === "Mobile Money" && (
              <div className="ml-6 space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="MTN Mobile Money"
                    checked={mobileMoneyOption === "MTN Mobile Money"}
                    onChange={() => setMobileMoneyOption("MTN Mobile Money")}
                    className="form-radio text-yellow-500"
                  />
                  <span>MTN Mobile Money</span>
                  <i className="fas fa-mobile-alt text-yellow-500 text-xl"></i>
                </label>
                {mobileMoneyOption === "MTN Mobile Money" && (
                  <div className="p-3 border rounded-md bg-red-50">
                    <h1 className="text-sm font-semibold">
                      Account Name: Minnick LTD
                    </h1>
                    <p className="text-sm">Phone: 0501234567</p>
                  </div>
                )}

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Vodafone Cash"
                    checked={mobileMoneyOption === "Vodafone Cash"}
                    onChange={() => setMobileMoneyOption("Vodafone Cash")}
                    className="form-radio text-red-600"
                  />
                  <span>Vodafone Cash</span>
                  <i className="fas fa-sim-card text-red-600 text-xl"></i>
                </label>
                {mobileMoneyOption === "Vodafone Cash" && (
                  <div className="p-3 border rounded-md bg-red-50">
                    <h1 className="text-sm font-semibold">
                      Account Name: Minnick LTD
                    </h1>
                    <p className="text-sm">Phone: 0501234567</p>
                  </div>
                )}

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="AirtelTigo Money"
                    checked={mobileMoneyOption === "AirtelTigo Money"}
                    onChange={() => setMobileMoneyOption("AirtelTigo Money")}
                    className="form-radio text-blue-600"
                  />
                  <span>AirtelTigo Money</span>
                  <i className="fas fa-credit-card text-blue-600 text-xl"></i>
                </label>
                {mobileMoneyOption === "AirtelTigo Money" && (
                  <div className="p-3 border rounded-md bg-red-50">
                    <h1 className="text-sm font-semibold">
                      Account Name: Minnick LTD
                    </h1>
                    <p className="text-sm">Phone: 0501234567</p>
                  </div>
                )}
              </div>
            )}

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="Counter Payment"
                checked={paymentMethod === "Counter Payment"}
                onChange={() => setPaymentMethod("Counter Payment")}
                className="form-radio text-blue-600"
              />
              <span>Counter Payment</span>
              <i className="fas fa-hand-holding text-blue-600 text-xl">₵</i>
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-3 rounded shadow-lg w-full max-w-xs"
          >
            {isSubmitting ? "Submitting..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
