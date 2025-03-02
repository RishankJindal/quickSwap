import jwt from "jsonwebtoken";
import User from "../models/user_model.js";
import Admin from "../models/admin_model.js";

// ✅ Middleware to verify JWT and authenticate users/admins
const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    try {
      token = token.split(" ")[1]; // Extract token
      const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify JWT

      // Check if user exists in User or Admin collection
      let user = await User.findById(decoded.id).select("-password");
      let admin = await Admin.findById(decoded.id).select("-password");

      if (!user && !admin) {
        return res.status(401).json({ message: "User not found" });
      }

      // Attach user/admin data to req object
      req.user = user || admin;
      req.user.isAdmin = !!admin; // If admin exists, mark isAdmin as true

      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(401).json({ message: "No token, authorization denied" });
  }
};

// ✅ Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Access denied, admin only" });
  }
};

export { protect, isAdmin };
