import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Admin from "./components/Admin";
import OrderForm from "./components/OrderForm";
import DigitalPrinting from "./components/DigitalPrinting";
import DocumentPrinting from "./components/DocumentPrinting";
import Checkout from "./components/Checkout";
import PhotoCopy from "./components/PhotoCopy";
import PhotoPrinting from "./components/PhotoPrinting";
import ConfirmCheckout from "./components/ConfirmCheckout";
import OrderReview from "./components/OrderReview";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

const myrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<div>Not Found</div>} />
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/confirm-checkout" element={<ConfirmCheckout />} />
      <Route path="/services/digital-printing" element={<DigitalPrinting />} />
      <Route path="/services/photocopy" element={<PhotoCopy />} />
      <Route path="/services/photo-printing" element={<PhotoPrinting />} />
      <Route path="/services/digital-printing/:title" element={<Checkout />} />
      <Route path="/services/document-printing/:title" element={<Checkout />} />
      <Route path="/services/checkout/:title" element={<Checkout />} />
      <Route path="/services/photocopy/:title" element={<Checkout />} />
      <Route path="/services/photo-printing/:title" element={<Checkout />} />
      <Route path="/order-review-payment" element={<OrderReview />} />
      <Route
        path="/services/document-printing"
        element={<DocumentPrinting />}
      />

      <Route path="/orders" element={<OrderForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={myrouter} />;
}

export default App;
