import { useState, useEffect } from "react";

const SkillsInput = ({ selectedSkills, setSelectedSkills }) => {
  const [skillsList, setSkillsList] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 

  // Fetch skills from an online source
  useEffect(() => {
    fetch("https://api.github.com/search/topics?q=programming") 
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setSkillsList(data.items.map((item) => item.name)); // Extract skill names
        }
      })
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  // Handle skill selection
  const handleSelectSkill = (skill) => {
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]); // Add new skill
    }
    setInputValue(""); // Clear input field
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleSelectSkill(inputValue.trim());
      e.preventDefault(); // Prevent form submission
    }
  };

  // Remove selected skill
  const removeSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="text-white">
      <label htmlFor="skills" className="block font-medium mb-1">Skills:</label>
      <div className="relative">
        <input
          type="text"
          id="skills"
          list="skillsList"
          placeholder="Enter a skill"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {/* Auto-suggestion dropdown */}
        {inputValue && (
          <ul className="absolute bg-gray-800 text-white w-full mt-1 rounded-md shadow-lg max-h-40 overflow-y-auto">
            {skillsList
              .filter((skill) => skill.toLowerCase().includes(inputValue.toLowerCase()))
              .map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectSkill(suggestion)}
                  className="p-2 hover:bg-purple-600 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {selectedSkills.map((skill, index) => (
          <span key={index} className="bg-purple-600 px-3 py-1 rounded-md text-white flex items-center">
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              className="ml-2 text-sm text-red-400 hover:text-red-600"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsInput;
