import mongoose from 'mongoose'
import 'dotenv/config'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1); // Exit process if connection fails
    }
};


