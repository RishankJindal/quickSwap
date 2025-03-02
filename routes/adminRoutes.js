import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { 
    registerAdmin, 
    loginAdmin, 
    getAdminProfile, 
    updateAdminProfile, 
    deleteAdmin ,
    getAllUsers,
    updateUser
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/profile", protect, getAdminProfile);
adminRouter.put("/profile", protect, updateAdminProfile);
adminRouter.delete("/:id", protect, deleteAdmin);
adminRouter.get("/users", protect, getAllUsers);
adminRouter.put("/users", protect, updateUser);

export default adminRouter;
