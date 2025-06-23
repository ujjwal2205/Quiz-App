import express from "express";
import { addToLeaderboard,viewLeaderboard } from "../controllers/AdminController.js";
import { authenticate,isAdmin } from "../middleware/auth.js";
const Adminrouter = express.Router();

Adminrouter.post("/addToLeaderboard",addToLeaderboard);
Adminrouter.get("/leaderboard",authenticate,isAdmin, viewLeaderboard);
export default Adminrouter;