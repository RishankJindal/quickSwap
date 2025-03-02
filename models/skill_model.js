import mongoose from "mongoose";

const skillSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // Skill name (e.g., "Web Development")
    category: { type: String ,required:true},
    description: { type: String , default:""},
    offeredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to user who created the skill
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
