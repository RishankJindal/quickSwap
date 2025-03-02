import asyncHandler from "express-async-handler";
import Skill from "../models/skill_model.js";

// ✅ Create a New Skill
export const createSkill = asyncHandler(async (req, res) => {
    try {
        const { name, category, description } = req.body; // Added description
        const userID = req.user._id; 

        if (!name || !category) {
            return res.status(400).json({ message: "Name and category are required" });
        }

        // Check if skill already exists
        const existingSkill = await Skill.findOne({ name });
        if (existingSkill) {
            return res.status(400).json({ message: "Skill already exists" });
        }

        // Create new skill with optional description
        const skill = await Skill.create({ 
            name, 
            category, 
            description: description || "", // Default to empty string if not provided
            offeredBy: userID
        });

        res.status(201).json({ 
            message: "Skill created successfully", 
            skill 
        });

    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
});


// ✅ Get All Skills
export const getAllSkills = asyncHandler(async (req, res) => {
    try {
        const skills = await Skill.find().populate("offeredBy", "name email"); // Get user details who created skill
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
});

