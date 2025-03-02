import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import "./index.css";
import Skills from "./components/Skills";
import { ProfilePage } from "./components/ProfilePage";
import OfferSkill from "./components/OfferSkills";
import Contact from "./pages/Contact";
import AdminSignup from "./pages/AdminSignup";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null to avoid incorrect initial state

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/verifyToken/${token}`);
        const data = await response.json();
        setIsAuthenticated(data.valid); // If valid, set to true, otherwise false
      } catch (error) {
        console.error("Token verification failed:", error);
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  // Protected Route Wrapper
  const ProtectedRoute = ({ element }) => {
    if (isAuthenticated === null) return <div>Loading...</div>; // Prevent unnecessary redirects before auth check
    return isAuthenticated ? <Navigate to="/" /> : element;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<ProtectedRoute element={<Login />} />} />
        <Route path="/signup" element={<ProtectedRoute element={<Signup />} />} />
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/offerskill" element={<OfferSkill />} />
        <Route path="/admin-signup" element={<ProtectedRoute element={<AdminSignup />} />} />
      </Routes>
    </>
  );
}

export default App;
