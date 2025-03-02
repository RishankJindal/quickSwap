import React, { useState } from "react";
import { Navbar } from "./Navbar";

const OfferSkill = () => {
  const [skillName, setSkillName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ skillName, description, category });
    alert("Skill Offered Successfully!");
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">🚀 Offer a Skill</h2>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Skill Name</label>
            <input
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          

          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-yellow-400"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold"
          >
            ✅ Submit Skill
          </button>
        </form>
      </div>
    </div>
    </>

  );
};

export default OfferSkill;