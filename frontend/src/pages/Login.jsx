import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    // Validate credentials
    if (credentials.email === storedUser.email && credentials.password === storedUser.password) {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect after successful login
    } else {
      alert("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 px-4 rounded-md transition-all">
            Login
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Don't have an account? <a href="/signup" className="text-yellow-400">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
