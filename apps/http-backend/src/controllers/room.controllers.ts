import { RoomInput } from "@repo/schema-validations/types";
import { Request, Response } from "express";
import { prismaClient as prisma } from "@repo/db/schema";

export const createRoom = async (req: Request, res: Response) => {
    const parsedData = RoomInput.safeParse(req.body)
    const userId = req.userId;

    if(!userId) {
        return res.json({
            message: "userId not found"
        })
    }
    if(!parsedData.success){
        res.status(400).json({
            name: "neccessery field missing"
        })
    }

    try {

        const user = await prisma.user.findUnique({
            where: { 
                id: userId 
            },
        });

        if (!user) {
            return res.status(400).json({ 
                message: "Admin user not found" 
            });
        }

        const rooms = await prisma.room.create({
            data: {
                name: parsedData.data?.name!,
                adminId: userId
            }
        })

        res.status(201).json({
            created: "success",
            rooms
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Unable to create room",
            error: error?.message
        })
    }
}


export const getRoomById = async (req: Request, res: Response) => {

    const roomId = req.params.id
    try {
        const room = await prisma.room.findUnique({
            where: {
                id: roomId
            }
        })
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.status(200).json({
            room
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Unable to fetch room",
            error: error.message
        })
    }
}

export const getAllRooms = async (req: Request, res: Response) => {

    try {
        const rooms = await prisma.room.findMany({
            where: {disabled: false}
        })
        if (!rooms.length) {
        return res.status(404).json({ message: "No rooms found" });
        }
        res.status(200).json({
            room: "all",
            rooms
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Unable to fetch room",
            error: error.message
        })
    }
}

export const updateRoomName = async (req: Request, res: Response) => {
    const parsedData = RoomInput.safeParse(req.body)
    const roomId = req.body.roomId
    try {
        const room = await prisma.room.update({
            where: {
                id: roomId
            },
            data: {
                name: parsedData.data?.name
            }
        })
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.status(200).json({
            room
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Unable to update room",
            error: error.message
        })
    }
}



export const deleteRoom = async (req: Request, res: Response) => {
    const parsedData = RoomInput.safeParse(req.body)
    const roomId = req.body.roomId
    try {
        const room = await prisma.room.update({
            where: {
                id: roomId
                
            },
            data: {
                disabled: true
            }
        })
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.status(200).json({
            messages: "Room Deleted successfully"
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Unable to delete room",
            error: error.message
        })
    }
}