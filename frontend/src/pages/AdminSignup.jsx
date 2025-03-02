import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle gender selection
  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

  // Handle signup submission
  const handleSignup = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("admin", JSON.stringify(user));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Admin Signup</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          {/* Gender Selection */}
          <div className="text-white">
            <label className="block text-lg font-semibold mb-2">Gender:</label>
            <div className="flex flex-wrap gap-6">
              {["Male", "Female", "Other"].map((gender) => (
                <label key={gender} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={user.gender === gender}
                    onChange={handleGenderChange}
                    className="hidden peer"
                    required
                  />
                  <span
                    className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all
                      ${user.gender === gender ? "border-yellow-400 bg-yellow-400" : "border-gray-400"}`}
                  >
                    {user.gender === gender && <span className="w-3 h-3 bg-white rounded-full"></span>}
                  </span>
                  {gender}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 px-4 rounded-md transition-all"
          >
            Signup
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Already have an account? <a href="/login" className="text-yellow-400">Login</a>
        </p>
      </div>
    </div>
  );
};

export default AdminSignup;
