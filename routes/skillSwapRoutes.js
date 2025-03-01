import express from "express";
import { requestSkillSwap, acceptSkillSwap, completeSkillSwap, getSkillSwaps } from "../controllers/skillSwapController.js";
import { protect } from "../middlewares/authMiddleware.js";

const skillSwapRouter = express.Router();

skillSwapRouter.post("/request", protect, requestSkillSwap);
skillSwapRouter.get("/getSwaps", protect, getSkillSwaps);
skillSwapRouter.put("/accept/:id", protect, acceptSkillSwap);
skillSwapRouter.put("/complete/:id", protect, completeSkillSwap);

export default skillSwapRouter;
