import asyncHandler from "express-async-handler";
import SkillSwap from "../models/skill_swap_model.js";
import Skill from '../models/skill_model.js'

// ✅ Create a Skill Swap Request
export const requestSkillSwap = asyncHandler(async (req, res) => {
    const { skillOffered, skillWanted, totalSessions } = req.body;

    // ✅ Find the skill owner (receiver)
    const skill = await Skill.findOne({ _id: skillWanted }).populate("offeredBy");

    if (!skill) {
        return res.status(404).json({ message: "Requested skill not found" });
    }

    const receiver = skill.offeredBy; // User offering the requested skill

    // ✅ Ensure requester and receiver are different
    if (req.user._id.toString() === receiver._id.toString()) {
        return res.status(400).json({ message: "You cannot request a swap with yourself" });
    }

    // ✅ Create the skill swap request
    const swap = await SkillSwap.create({
        requester: req.user._id, // User making the request
        receiver, // User who owns the requested skill
        skillOffered,
        skillWanted,
        totalSessions,
    });

    res.status(201).json({ message: "Skill swap request created successfully", swap });
});


// ✅ Accept a Skill Swap
export const acceptSkillSwap = asyncHandler(async (req, res) => {
    const swap = await SkillSwap.findById(req.params.id);
    if (!swap) return res.status(404).json({ message: "Skill swap not found" });

    swap.status = "accepted";
    await swap.save();

    res.json({ message: "Swap accepted", swap });
});

// ✅ Complete a Skill Swap
export const completeSkillSwap = asyncHandler(async (req, res) => {
    const swap = await SkillSwap.findById(req.params.id);
    if (!swap) return res.status(404).json({ message: "Skill swap not found" });

    swap.status = "completed";
    swap.feedback = req.body.feedback;
    await swap.save();

    res.json({ message: "Swap completed", swap });
});

// ✅ Get Skill Swaps
export const getSkillSwaps = asyncHandler(async (req, res) => {
    try {
        const swaps = await SkillSwap.find()
            .populate("requester", "name email")
            .populate("receiver", "name email")
            .populate("skillOffered skillWanted");

        res.status(200).json(swaps);
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
});
