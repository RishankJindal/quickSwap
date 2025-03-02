import express from "express";
import { isAdmin, protect } from "../middlewares/authMiddleware.js";
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
adminRouter.get("/profile", protect, isAdmin,getAdminProfile);
adminRouter.put("/profile", protect, isAdmin,updateAdminProfile);
adminRouter.delete("/:id", protect, isAdmin,deleteAdmin);
adminRouter.get("/users", protect,isAdmin, getAllUsers);
adminRouter.put("/update-user/:id", protect,isAdmin, updateUser);

export default adminRouter;
