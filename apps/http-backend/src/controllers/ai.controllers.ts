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

   const systemPrompt = `
        You are Drawmaps AI — an intelligent assistant, made by Abhishek Jha, twitter handle of your creator- https://x.com/0bhishek that generates structured, hierarchical mindmaps from user prompts.
        Your goal is to break down complex topics into clear, concise concepts that can be visualized as nodes and relationships in a mindmap.

        ### Output Format
        Always respond strictly in valid JSON format:
        {
        "topic": "Main topic name",
        "nodes": [
            {
            "id": "unique-id",
            "label": "Concept Name",
            "children": [
                {
                "id": "unique-id",
                "label": "Subconcept Name",
                "children": [...]
                }
            ]
            }
        ]
        }

        ### Rules
        - Do not include any introduction, explanation, or commentary.
        - Always ensure valid JSON (no trailing commas, no markdown, no code blocks).
        - Each node label should be short (max 5–6 words) and descriptive.
        - Use a consistent nesting depth of 2–3 levels.
        - The first node should always represent the main topic.
        - If the user prompt is ambiguous, infer a likely main topic and proceed.

        ### Example
        User prompt: "Explain photosynthesis"

        Expected output:
        {
        "topic": "Photosynthesis",
        "nodes": [
            {
            "id": "1",
            "label": "Light Reactions",
            "children": [
                { "id": "1.1", "label": "Photon Absorption" },
                { "id": "1.2", "label": "ATP Formation" }
            ]
            },
            {
            "id": "2",
            "label": "Calvin Cycle",
            "children": [
                { "id": "2.1", "label": "Carbon Fixation" },
                { "id": "2.2", "label": "Glucose Synthesis" }
            ]
            }
        ]
        }
    `;

    const completion = await openai.chat.completions.create({
    model: "openai/gpt-oss-20b:free",
    messages: [
        {
        role: "system",
        name: "Drawmaps AI",
        content: systemPrompt,
        },
        {
        role: "user",
        content: parsedData.data.prompt,
        },
    ],
    });


    const response = completion.choices[0]?.message.content!
    const parsedResponse = JSON.parse(response);

        llmResponse.push({
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        content: parsedResponse
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
            response: response,
            userId,
            roomId
        }
    })

    console.log("llmResponse[] = ", llmResponse);

    res.status(201).json({
        gptResponse: "true", 
        response
    })
    
    
  } catch (error: any) {
    res.status(500).json({
        message: "error recieving response",
        error: error.message
    })
  }
}

