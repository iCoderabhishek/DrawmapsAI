import { Request, Response} from "express"
import express from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { prismaClient as prisma} from "@repo/db/schema"
import { RoomInput } from "@repo/schema-validations/types"

const app = express()
// app.use(authMiddleware)clear



// export const getUserById = async (req: Request, res: Response) => {

//     const userId = req.userId as string;
//     res.status(200).json({
//         userId,
//     });
// }

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await prisma.user.findMany()
        res.status(200).json({
            users: "all users",
            allUsers,
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Failed to fetch users",
            error: error?.message
        })
    }

}

