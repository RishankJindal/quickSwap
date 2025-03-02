import asyncHandler from "express-async-handler";
import SkillSwap from "../models/skill_swap_model.js";

// ✅ Create a Skill Swap Request
export const requestSkillSwap = asyncHandler(async (req, res) => {
    const { skillOffered, skillWanted, totalSessions } = req.body;
    const swap = await SkillSwap.create({
        requester: req.user._id,
        receiver,
        skillOffered,
        skillWanted,
        totalSessions
    });
    res.status(201).json(swap);
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
