import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCardsStore from "../store/useCardStore"; // Adjust the import path
import useCartStore from "../store/cartStore";

const Checkout = () => {
  const navigate = useNavigate();
  const { title } = useParams(); // Get the title from the URL
  const card = useCardsStore((state) =>
    state.cards.find((card) => card.title === title)
  ); // Find the card by title in the store

  const addToCart = useCartStore((state) => state.addToCart);
  const setCheckoutData = useCartStore((state) => state.setCheckoutData);

  const [selectedImage, setSelectedImage] = useState(card.images[0]);
  const [quantity, setQuantity] = useState(1);
  //const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [note, setNote] = useState("");

  // Open Cloudinary Upload Widget
  const openUploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dkcbdocs1", // Replace with your Cloudinary cloud name
        uploadPreset: "kingbible-print", // Replace with your preset name
        sources: ["local", "camera"], // Allow different upload sources
        multiple: false, // Allow single file upload
        resourceType: "auto",
        clientAllowedFormats: ["jpg", "png", "pdf"], // Allow images & PDFs
        maxFiles: 1,
        folder: "uploads/", // Optional: Store files in a specific folder
      },
      (error, result) => {
        if (!error && result.event === "success") {
          console.log("Uploaded file:", result.info);

          if (result.info.resource_type === "image") {
            setFileUrl(result.info.secure_url);
          } else if (result.info.resource_type === "raw") {
            setFileUrl(result.info.secure_url); // Save uploaded file URL
          }
        }
      }
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      image: selectedImage.src,
      product: card.title,
      price: card.price,
      quantity: quantity,
      total: (card.price * quantity).toFixed(2),
    };

    // Update checkoutData
    setCheckoutData({
      productName: card.title,
      quantity: quantity,
      file: fileUrl,
      note: note,
    });
    console.log("Checkout data:", {
      productName: card.title,
      quantity: quantity,
      note: note,
      file: fileUrl,
    });

    addToCart(cartItem); // Add to global state
    console.log("Updated Cart:", useCartStore.getState().cart);
    navigate("/services/confirm-checkout"); // Redirect to confirmation page
  };

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="p-6 mt-10">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-1">
          {/* Large Image */}
          <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-96 object-contain"
            />
          </div>

          {/* Grid of Smaller Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {card.images.map((image) => (
              <div
                key={image.id}
                className={`cursor-pointer border rounded-lg p-1 ${
                  image.id === selectedImage.id
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Product Title */}
          <h1 className="text-3xl font-normal">{card.title}</h1>

          {/* Price */}
          <p className="text-xl text-blue-500">${card.price.toFixed(2)}</p>

          {/* Product Details */}
          <p className="text-sm text-gray-500">
            Direct to Garment <br />
            <span>
              <span className="text-xs text-green-400 font-light">
                4899 in stock
              </span>
            </span>
          </p>

          {/* File Upload */}
          <div className="flex gap-10 items-center">
            <button
              onClick={openUploadWidget}
              className="border border-blue-700 text-blue-600 rounded-lg py-2 px-4 hover:bg-gray-200 transition"
            >
              Upload File
            </button>
            {fileUrl && (
              <div className="mt-4">
                {fileUrl.endsWith(".pdf") ? (
                  <iframe
                    src={fileUrl}
                    title="Uploaded PDF"
                    className="w-20 h-20 object-contain"
                  />
                ) : (
                  <img
                    src={fileUrl}
                    alt="Uploaded file"
                    className="w-32 h-32 object-contain"
                  />
                )}
              </div>
            )}
          </div>
          {/* Comment */}
          <div className="flex gap-20 items-center mb-5 mt-5">
            <label htmlFor="note" className="text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              type="textarea"
              minLength="3"
              id="notes"
              onChange={(e) => setNote(e.target.value)}
              className="block w-1/2 text-sm text-gray-500 border rounded-lg px-4 py-2"
            />
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center gap-5">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="block w-20 text-lg bg-gray-300 border rounded-lg px-4 py-2 text-center"
            />
            <button
              onClick={handleAddToCart}
              className="w-1/4 border-2 border-blue-700 text-blue-600 rounded-lg py-3 font-medium hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-300 rounded-lg mt-20">
        <div className="bg-gray-200 px-4 py-2 rounded-t-lg text-lg font-semibold">
          Description
        </div>
        <div className="px-4 py-6 text-sm text-gray-700">
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
