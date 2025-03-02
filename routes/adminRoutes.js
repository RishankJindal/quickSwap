import express from "express";
import { protect, isAdmin } from "../middlewares/protect.js";
import User from "../models/user_model.js";

const router = express.Router();

// Get all users (Admin Only)
router.get("/users", protect, isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete a user (Admin Only)
router.delete("/users/:id", protect, isAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
});

export default router;
