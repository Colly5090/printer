import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebaseConfig"; // Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("Signing in user...");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User signed in: ", user);

      // Now fetch the login data (Firestore access is allowed since user is authenticated)
      console.log("Fetching login data...");
      const querySnapshot = await getDocs(collection(db, "users"));

      const adminData = querySnapshot.docs.map((doc) => doc.data());
      console.log("Admin data: ", adminData);

      const isAdmin = adminData.some(
        (admin) => admin.email === email && admin.password === password
      );

      console.log("Is admin: ", isAdmin);

      if (isAdmin) {
        console.log("Admin credentials matched. Redirecting...");
        navigate("/admin");
      } else {
        setError("Invalid email or password.");
        console.log("Invalid credentials.");
      }
    } catch (error) {
      console.error("Error occurred during login: ", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back Admin 👋
        </h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500">or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="currentColor">
            <path d="M44.5 20H24v8.5h11.8C33 35.5 29 39 24 39c-8 0-14.5-6.5-14.5-14.5S16 10 24 10c3.5 0 6.5 1.5 9 3.5l6.5-6.5C35 2.5 29.5 0 24 0 11 0 0 11 0 24s11 24 24 24c12 0 24-8.5 24-24 0-1.5 0-3-.5-4.5z" />
          </svg>
          Sign in with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
