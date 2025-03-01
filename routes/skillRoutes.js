import express from "express";
import { createSkill, getAllSkills } from "../controllers/skillController.js";

const skillRouter = express.Router();

skillRouter.post("/create", createSkill);
skillRouter.get("/getAllSkills", getAllSkills);

export default skillRouter;
