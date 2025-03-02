import {  Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import "./index.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
