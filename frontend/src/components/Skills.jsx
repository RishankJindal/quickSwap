import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar.jsx';
import SkillsSection from './SkillsSection.jsx';
import Footer from './Footer.jsx';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/skills/getAllSkills');
        const data = await res.json();
        setSkills(data);
      } catch (err) {
        console.log('Error fetching skills:', err);
      }
    };

    fetchSkills();
  }, []);

  return (
    <>
      <Navbar />
      <SkillsSection getAllSkills={() => skills} />
      <Footer />
    </>
  );
};

export default Skills;
