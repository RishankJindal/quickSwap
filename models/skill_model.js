import mongoose from "mongoose";

const skillSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // Skill name (e.g., "Web Development")
    description: { type: String }, // Optional skill description
    offeredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to user who created the skill
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
