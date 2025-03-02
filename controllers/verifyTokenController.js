import { log } from "node:console";
import { verifyToken } from "../utils/verifyToken.js";

export const checkToken = async (req, res) => {

    
    let token = req.headers.authorization || req.params.token; // Check headers first, then URL

    if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1]; // Remove "Bearer " prefix
    }

    const result = await verifyToken(token);

    return res.status(result.isValid ? 200 : 401).json(result);
};
