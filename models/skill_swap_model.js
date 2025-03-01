import mongoose from "mongoose";

const skillSwapSchema = mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    skillOffered: { type: mongoose.Schema.Types.ObjectId, ref: "Skill", required: true }, // Now referencing Skill model
    skillWanted: { type: mongoose.Schema.Types.ObjectId, ref: "Skill", required: true },

    status: {
      type: String,
      enum: ["pending", "accepted", "declined", "completed"],
      default: "pending",
    },
    swapSessions: { type: Number, default: 0 },
    totalSessions: { type: Number, required: true },
    feedback: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("SkillSwap", skillSwapSchema);
