import {  Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import "./index.css";
import Skills from "./components/Skills";
import { ProfilePage } from "./components/ProfilePage";
import OfferSkill from "./components/OfferSkills";
import Contact from "./pages/Contact";
import AdminSignup from "./pages/AdminSignup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/offerskill" element={<OfferSkill />} />
      <Route path="/admin-signup" element={<AdminSignup />} />
    </Routes>
  );
}

export default App;
