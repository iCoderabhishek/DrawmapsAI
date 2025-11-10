import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../config/index.js"

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET!) as { userId: string };
        req.userId = decoded.userId;
        next();
    } catch (error: any) {
        res.status(401).json({
            message: "Unauthorized",
        });
    }
};