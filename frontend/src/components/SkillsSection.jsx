import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Want Skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const wantSkillsData = [
    { rank: 1, name: "John Doe", points: 1250, techStack: "React", language: "JavaScript" },
    { rank: 2, name: "Jane Smith", points: 1180, techStack: "Vue", language: "TypeScript" },
    { rank: 3, name: "Alex Johnson", points: 1100, techStack: "Angular", language: "Python" },
  ];

  const getSkillsData = [
    { rank: 1, name: "Tech Titans", points: 3500, techStack: "Full Stack", badges: 10 },
    { rank: 2, name: "Code Crushers", points: 3250, techStack: "Backend", badges: 8 },
    { rank: 3, name: "Byte Breakers", points: 3100, techStack: "Frontend", badges: 6 },
  ];

  return (
    <motion.div className="h-[650px] bg-gray-900 bg-gradient-to-b from-gray-800 via-gray-900 to-black md:p-8 p-4">
      <main ref={ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-yellow-400 text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="border-b-4 border-yellow-400 pb-1">Skills</span>
        </motion.h2>

        <hr className="m-2 border-yellow-400" />

        {/* Tab Button*/}
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

        {/* Display */}
        <motion.div
          className="text-white bg-gray-800 p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === "Want Skills" ? (
            <ul className="space-y-4">
              {wantSkillsData.map((user, index) => (
                <motion.li
                  key={user.rank}
                  className="p-4 border-b border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="font-bold text-yellow-400">{user.rank}.</span>{" "}
                  {user.name} - <span className="text-yellow-300">{user.points} points</span> (
                  <span className="text-green-400">{user.techStack}</span>, {user.language})
                </motion.li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-4">
              {getSkillsData.map((team, index) => (
                <motion.li
                  key={team.rank}
                  className="p-4 border-b border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="font-bold text-yellow-400">{team.rank}.</span>{" "}
                  {team.name} - <span className="text-yellow-300">{team.points} points</span> (
                  <span className="text-green-400">{team.techStack}</span>,{" "}
                  <span className="text-purple-300">🏅 {team.badges} Badges</span>)
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </main>
    </motion.div>
  );
}
