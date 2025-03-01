import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkillsInput from "../components/SkillsInput";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    address: "",
    skills: [], 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    onChange(event.target.value); // Pass selected gender to parent component
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Signup
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
            required
          />

          {/* Gender Selection */}
          <div className="text-white">
      <label className="block text-lg font-semibold mb-2">Gender:</label>
      <div className="flex gap-6">
        {["Male", "Female", "Other"].map((gender) => (
          <label key={gender} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={selectedGender === gender}
              onChange={handleGenderChange}
              className="hidden peer"
              required
            />
            <span className={`w-5 h-5  border-2 rounded-full flex items-center justify-center transition-all
              ${selectedGender === gender ? "border-purple-500 bg-purple-500" : "border-gray-400"}`}>
              {selectedGender === gender && <span className="w-3 h-3 bg-white rounded-full"></span>}
            </span>
            {gender}
          </label>
        ))}
      </div>
    </div>

          {/* Address Field */}
          <div className="text-white">
            <label htmlFor="address" className="block font-medium mb-1">
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
              required
            />
          </div>
          <SkillsInput
            selectedSkills={user.skills}
            setSelectedSkills={(skills) => setUser({ ...user, skills })}
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-all"
          >
            Signup
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
