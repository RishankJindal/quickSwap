import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin_model.js";
import User from "../models/user_model.js";

// ✅ Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id, isAdmin: true }, process.env.SECRET_KEY, { expiresIn: "7d" });
};

// ✅ Register an Admin
export const registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, phone, gender, password } = req.body;

    if (!name || !email || !phone || !gender || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if admin already exists (by email or phone)
    const existingAdmin = await Admin.findOne({ $or: [{ email }, { phone }] });
    if (existingAdmin) {
        return res.status(400).json({ message: "Admin with this email or phone already exists" });
    }

    // Create new admin user
    const admin = await Admin.create({ name, email, phone, gender, password });

    res.status(201).json({
        message: "Admin registered successfully",
        token: generateToken(admin._id),
    });
});

// ✅ Login Admin
export const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find admin in database
    const admin = await Admin.findOne({ email });

    if (admin && bcrypt.compareSync(password, admin.password)) {
        res.status(200).json({
            message: "Admin login successful",
            token: generateToken(admin._id),
        });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// ✅ Get Admin Profile
export const getAdminProfile = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.user.id).select("-password");

    if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(admin);
});

// ✅ Update Admin Profile
export const updateAdminProfile = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.user.id);

    if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
    }

    admin.name = req.body.name || admin.name;
    admin.email = req.body.email || admin.email;
    admin.phone = req.body.phone || admin.phone;
    admin.gender = req.body.gender || admin.gender;

    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedAdmin = await admin.save();

    res.json({
        message: "Admin profile updated successfully",
        updatedAdmin,
    });
});

// ✅ Get All Users (Admin Only)
export const getAllUsers = asyncHandler(async (req, res) => {
    try {
        // Check if the requesting user is an admin
        const admin = await Admin.findById(req.user.id);
        if (!admin || !admin.isAdmin) {
            return res.status(403).json({ message: "Access denied. Admins only." });
        }

        // Fetch all users except their passwords
        const users = await User.find().select("-password");
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
});

// ✅ Update User (Admin Only)
export const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params; // Get user ID from URL
    const { name, email, phone, gender, address, isPremium } = req.body; // Fields to update

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user fields if provided
        if (name) user.name = name;
        if (email) user.email = email;
        if (phone) user.phone = phone;
        if (gender) user.gender = gender;
        if (address) user.address = address;
        if (isPremium !== undefined) user.isPremium = isPremium;

        const updatedUser = await user.save(); // Save updated user

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
});

// ✅ Delete an Admin
export const deleteAdmin = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
    }

    await admin.deleteOne();
    res.json({ message: "Admin deleted successfully" });
});
