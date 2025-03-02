import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillsSection({ getAllSkills }) {
  const [activeTab, setActiveTab] = useState("Want Skills");
  const [getSkillsData, setGetSkillsData] = useState([]);
  const [interestedSkills, setInterestedSkills] = useState(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wantSkillsData = getAllSkills();

  const handleInterested = (skill) => {
    setGetSkillsData((prev) => [...prev, skill]);
    setInterestedSkills((prev) => new Set([...prev, skill.name]));
  };

  return (
    <motion.div className="h-[650px] bg-gray-900 bg-gradient-to-b from-gray-800 via-gray-900 to-black md:p-8 p-4">
      <main ref={ref} className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-yellow-400 text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="border-b-4 border-yellow-400 pb-1">Skills</span>
        </motion.h2>

        <hr className="m-2 border-yellow-400" />

        <motion.div
          className="flex justify-center mb-8 border-2 border-yellow-400 rounded-full md:mx-40 mx-10 overflow-hidden bg-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => setActiveTab("Want Skills")}
            className={`flex-1 px-8 py-2 md:py-3 font-bold transition-all duration-300 ${
              activeTab === "Want Skills"
                ? "bg-yellow-400 text-black"
                : "bg-transparent text-white hover:bg-white/10"
            }`}
          >
            Want Skills
          </button>
          <button
            onClick={() => setActiveTab("Get Skills")}
            className={`flex-1 px-8 py-2 md:py-3 font-bold transition-all duration-300 ${
              activeTab === "Get Skills"
                ? "bg-yellow-400 text-black"
                : "bg-transparent text-white hover:bg-white/10"
            }`}
          >
            Get Skills
          </button>
        </motion.div>

        <motion.div
          className="text-white bg-gray-800 p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeTab === "Want Skills"
              ? wantSkillsData.map((user, index) => (
                  <motion.div
                    key={index}
                    className="p-4 border border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <h3 className="font-bold text-yellow-400">{user.name}</h3>
                    <p className="text-blue-300">Category: {user.category}</p>
                    <button
                      onClick={() => handleInterested(user)}
                      className={`mt-2 px-4 py-2 font-bold rounded-lg transition-all ${
                        interestedSkills.has(user.name)
                          ? "bg-gray-500 text-white cursor-not-allowed"
                          : "bg-yellow-400 text-black hover:bg-yellow-500"
                      }`}
                      disabled={interestedSkills.has(user.name)}
                    >
                      {interestedSkills.has(user.name) ? "Interested ✅" : "Interested"}
                    </button>
                  </motion.div>
                ))
              : getSkillsData.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 border border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <h3 className="font-bold text-yellow-400">{skill.name}</h3>
                    <p className="text-blue-300">Category: {skill.category}</p>
                  </motion.div>
                ))}
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}