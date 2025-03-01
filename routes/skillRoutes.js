import express from "express";
import { createSkill, getAllSkills } from "../controllers/skillController.js";
import { protect } from "../middlewares/authMiddleware.js";

const skillRouter = express.Router();

skillRouter.post("/create",protect, createSkill);
skillRouter.get("/getAllSkills", getAllSkills);

export default skillRouter;
