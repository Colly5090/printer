import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  cartCount: 0,
  checkoutData: {
    productName: "",
    quantity: 0,
    file: null,
    note: "",
  },
  userInfo: {
    totalAmount: 0,
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  },

  // Add item to cart
  addToCart: (cartItem) =>
    set((state) => ({
      cart: [...state.cart, cartItem],
      cartCount: state.cartCount + 1,
    })),

  // Remove item from cart
  removeFromCart: (product) =>
    set((state) => {
      const itemToRemove = state.cart.find((item) => item.product === product);
      if (!itemToRemove) return state;

      return {
        cart: state.cart.filter((item) => item.product !== product),
        cartCount: Math.max(0, state.cartCount - 1),
      };
    }),

  // Clear cart
  clearCart: () => set({ cart: [], cartCount: 0 }),

  // Set checkout data (total amount, shipping, payment, etc.)
  setCheckoutData: (data) => set({ checkoutData: data }),

  // Set user information (full name, email, etc.)
  setUserInfo: (newData) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        ...newData, // Merge the new data with the existing user info
      },
    })),
}));

export default useCartStore;
