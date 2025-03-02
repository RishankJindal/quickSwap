import jwt from "jsonwebtoken";
import User from "../models/user_model.js";
import Admin from "../models/admin_model.js";

export const verifyToken = async (token) => {
    try {

        if(!token){
            return { isValid: false, message: "No token found", role: null };
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Check if token belongs to a User
        let user = await User.findById(decoded.id);
        if (user) {
            return { isValid: true, message: "Valid token", role: "user", user };
        }

        // Check if token belongs to an Admin
        let admin = await Admin.findById(decoded.id);
        if (admin) {
            return { isValid: true, message: "Valid token", role: "admin", admin };
        }

        return { isValid: false, message: "Invalid token", role: null };
    } catch (error) {
        return { isValid: false, message: `Token error: ${error.message}`, role: null };
    }
};
