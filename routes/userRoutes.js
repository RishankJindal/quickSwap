import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const usersRouter = express.Router();

usersRouter.post("/register", registerUser);
usersRouter.post("/login",loginUser);
usersRouter.get("/profile", protect, getUserProfile);

export default usersRouter;
