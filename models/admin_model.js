import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] // Ensuring only 10-digit numbers
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"], // Restrict values
            required: true
        },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: true }, // Ensure admin role
    },
    { timestamps: true }
);

// Hash password before saving
adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model("Admin", adminSchema);
