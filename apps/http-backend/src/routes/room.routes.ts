import { Router } from "express"
import { createRoom, getRoomById, updateRoomName, deleteRoom, getAllRooms } from "../controllers/room.controllers.js"
import { authMiddleware } from "../middleware/auth.middleware.js"


const router: Router = Router()
router.post("/", authMiddleware,createRoom)
router.get("/all", getAllRooms)
router.get("/:id", getRoomById)
router.post("/:id",authMiddleware, updateRoomName)
router.delete("/:id",authMiddleware, deleteRoom)

export default router