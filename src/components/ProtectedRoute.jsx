import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebaseConfig"; // Firebase Auth
import { useEffect } from "react";

const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  const loginTime = localStorage.getItem("loginTime");

  useEffect(() => {
    if (user) {
      // Store login time if not already stored
      if (!loginTime) {
        localStorage.setItem("loginTime", Date.now().toString());
      }

      // Auto logout after session timeout
      const timer = setTimeout(() => {
        auth.signOut(); // Firebase logout
        localStorage.removeItem("loginTime");
        window.location.href = "/login"; // Redirect to login
      }, SESSION_TIMEOUT);

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [user, loginTime]);

  const hasSessionExpired = loginTime
    ? Date.now() - Number(loginTime) > SESSION_TIMEOUT
    : true;

  if (!user || hasSessionExpired) {
    auth.signOut();
    localStorage.removeItem("loginTime");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
