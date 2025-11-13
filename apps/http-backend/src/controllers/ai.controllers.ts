import {  UserPrompt } from "@repo/schema-validations/types";
import { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import { prismaClient } from "@repo/db/schema";
dotenv.config();


const OPENAI_OSS_API_KEY= process.env.OPENAI_OSS_API_KEY
const QWEN3CODER_API_KEY = process.env.QWEN3CODER_API_KEY

interface LLM {
    id: string
    timestamp?: number,
    content?: string
}
const llmResponse: LLM[] = []

export const generateResponse = async (req: Request, res: Response) => {

  try {

     const parsedData = UserPrompt.safeParse(req.body)
    // send the prompt
    //generate through ai
    //get the response, store it to global variable, store in db

    if(!parsedData.success){
        return res.status(400).json({ 
            error: parsedData.error 
        });
    }

    const userId = req.userId;
    if(!userId){
        return res.status(400).json({
            error: "userId not found"
        })
    }



    const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: OPENAI_OSS_API_KEY
    });



    const completion = await openai.chat.completions.create({
    model: "openai/gpt-oss-20b:free",
    messages: [
        {
        role: "system",
        name: "Drawmaps AI",
        content: process.env.SYSTEM_PROMPT!,
        },
        {
        role: "user",
        content: parsedData.data.prompt,
        },
    ],
    });


    const response = completion.choices[0]?.message.content!

        llmResponse.push({
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        content: response
        });


    // for this ops the overall process can be a bit slow
    // two db queries happening here

    const room = await prismaClient.room.findUnique({
        where: {
            name: req.body.name
        }        
    })

    if (!room) {
        return res.status(404).json({ 
            error: "Room not found" 
        });
    }
    const roomId = room.id;

    await prismaClient.lLMResponse.create({
        data: {
            response,
            userId,
            roomId
        }
    })

    console.log("llmResponse[] = ", llmResponse);

    res.status(201).json({
        message: "success",
        prompt: parsedData.data.prompt,
        response
    })
    
    
  } catch (error: any) {
    res.status(500).json({
        message: "error recieving response",
        error: error.message
    })
  }
}

