import React, { useState } from "react";
import { Navbar } from "./Navbar";

const OfferSkill = () => {
  const [skillName, setSkillName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!skillName || !category || !description) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const skillData = {
      name: skillName,
      category,
      description
    };

    try {
      const response = await fetch("http://localhost:3000/api/skills/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzNkYmNlYWMzZjIzOTQ2MjA0OGU0NiIsImlhdCI6MTc0MDg4OTAzOCwiZXhwIjoxNzQxNDkzODM4fQ.tsxh5IIa4DBsquFzjocMCrG_SqsPW5U1Jewfo28N67g"
        },
        body: JSON.stringify(skillData),
      });

      if (response.ok) {
        alert("🎉 Skill Offered Successfully!");
        setSkillName("");
        setCategory("");
        setDescription("");
      } else {
        alert("❌ Failed to offer skill. Please try again.");
      }
    } catch (error) {
      console.error("Error offering skill:", error);
      alert("⚠️ An error occurred. Please try again later.");
    }
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
