import asyncHandler from "express-async-handler";
import User from "../models/user_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ✅ Register User
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone, gender, address, skillsHave } = req.body;

    // Validate required fields
    if (!skillsHave || skillsHave.length === 0) {
        return res.status(400).json({ message: "At least one skill is required." });
    }

    // Check if user already exists (by email or phone)
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
        return res.status(400).json({ message: "User with this email or phone number already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        gender,
        address,
        skillsHave,
    });

    res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        gender: newUser.gender,
        address: newUser.address,
        skillsHave: newUser.skillsHave,
        token: generateToken(newUser._id),
    });
});

// ✅ Login User
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ "message":"Login successful",token: generateToken(user._id) });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// ✅ Get User Profile
export const getUserProfile = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .populate("completedSwaps", "skillOffered skillWanted status") // Only selected fields
            .populate("skillsOffered", "name category") // Show skill names & categories
            .populate("skillsGet", "name category"); // Show skills they want

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
});


// 🔹 Generate JWT Token
const generateToken = (id) => jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "7d" });
