import { db } from "../config/firebaseConfig";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersRef = collection(db, "orders");

    const unsubscribe = onSnapshot(ordersRef, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      await deleteDoc(doc(db, "orders", orderId));
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Available Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-300 rounded-lg shadow-md p-6 bg-white"
            >
              {/* Product Info */}
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-orange-500 mb-2 text-center">
                  Product Info
                </h4>
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
              <div className="mb-4 space-y-2">
                <p>
                  <strong>Product:</strong> {order.checkout?.productName}
                </p>
                <p>
                  <strong>Quantity:</strong> {order.checkout?.quantity}
                </p>
                <p>
                  <strong>Note:</strong> {order.checkout?.note || "No note"}
                </p>
                <p>
                  <strong>File:</strong>
                  {order.checkout?.file ? (
                    order.checkout?.file.endsWith(".pdf") ? (
                      <div>
                        <iframe
                          src={order.checkout?.file}
                          width="100%"
                          height="500px"
                          title="Uploaded PDF"
                        />
                        <a
                          href={order.checkout?.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="text-blue-500"
                        >
                          Download PDF
                        </a>
                      </div>
                    ) : (
                      <div>
                        <img
                          src={order.checkout?.file}
                          alt="Uploaded file"
                          className="w-32 h-32 object-contain"
                        />
                        <a
                          href={order.checkout?.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="text-blue-500"
                        >
                          Download Image
                        </a>
                      </div>
                    )
                  ) : (
                    "No file"
                  )}
                </p>
                <p>
                  <strong>Total:</strong> ${order.user?.totalAmount}
                </p>
              </div>

              {/* Divider */}
              <hr className="my-4 border-gray-300" />

              {/* Customer Info */}
              <h4 className="text-lg font-semibold text-orange-500 mb-2 text-center">
                Customer Info
              </h4>
              <div className="space-y-2">
                <p>
                  <strong>Name:</strong> {order.user?.fullName}
                </p>
                <p>
                  <strong>Phone:</strong> {order.user?.phoneNumber}
                </p>
                <p>
                  <strong>Email:</strong> {order.user?.email}
                </p>
                <p>
                  <strong>Address:</strong> {order.user?.address}
                </p>
              </div>
              {/* Divider */}
              <hr className="my-4 border-gray-300" />
              <p>
                {order.createdAt
                  ? order.createdAt.toDate().toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                      timeZoneName: "short",
                    })
                  : "N/A"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
