import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig"; // Import Firebase configuration
import useCartStore from "../store/cartStore"; // Import your Zustand store

const submitOrder = async () => {
  const { checkoutData, userInfo } = useCartStore.getState(); // Get current state from Zustand store

  try {
    // Create a reference to the 'orders' collection in Firestore
    const orderRef = collection(db, "orders");

    // Add a new document to the Firestore collection
    await addDoc(orderRef, {
      checkout: checkoutData, // Include checkout data (shipping, note, total)
      user: userInfo, // Include user data (name, email, address)
      createdAt: new Date(), // Timestamp
    });

    console.log("Order submitted successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export default submitOrder;
