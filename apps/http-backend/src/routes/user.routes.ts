
import express, { Router } from "express"
// import { login, signup } from "../controllers/auth.controllers.js";
import { getAllUsers } from "../controllers/user.controllers.js";


const router: Router = express.Router();

// router.get("/:userId", getUserById)
router.get("/all", getAllUsers)




export default router