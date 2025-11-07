import { Request, Response} from "express"
import express from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { prismaClient as prisma} from "@repo/db/schema"

const app = express()
// app.use(authMiddleware)clear



// export const getUserById = async (req: Request, res: Response) => {

//     const userId = req.userId as string;
//     res.status(200).json({
//         userId,
//     });
// }

export const getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany()
    res.status(200).json({
        users: "all users",
        allUsers,
    });
}