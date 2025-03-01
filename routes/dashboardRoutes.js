import express from "express";
import { showDashboard } from "../controllers/dashboardController.js";


const dashboardRouter = express.Router();

dashboardRouter.get("/", showDashboard);


export default dashboardRouter;
