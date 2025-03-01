import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    password: { type: String, required: true },

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

    address: {
      type:String
    },
    skillsHave: {
      type: [{ type: String }],
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "At least one skill is required.",
      },
    },

    skillsOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    skillsGet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],

    bio: { type: String },
    rating: { type: Number, default: 0 },
    completedSwaps: [{ type: mongoose.Schema.Types.ObjectId, ref: "SkillSwap" }],
    isPremium: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
