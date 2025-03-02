import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center p-6">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-300/20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          📩 Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-white block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-lg transition-all text-lg shadow-lg hover:shadow-2xl"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
