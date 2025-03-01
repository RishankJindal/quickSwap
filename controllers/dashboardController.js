import asyncHandler from "express-async-handler";

export const showDashboard = asyncHandler(async (req, res) => {
    res.send("Hi from dashboard")
})
