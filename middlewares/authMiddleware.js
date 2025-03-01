import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    try {
      token = token.split(" ")[1];

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(401).json({ message: "No token, authorization denied"});
  }
};

export { protect };
