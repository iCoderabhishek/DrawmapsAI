
import express, { Router } from "express"
import { login, signup } from "../controllers/auth.controllers.js";
import { generateResponse } from "../controllers/ai.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router: Router = express.Router();

router.post("/generate", authMiddleware, generateResponse)

export default router