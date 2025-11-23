import express from "express"
import cors from "cors"
import  UserRoute  from "./routes/user.routes.js"
import AuthRoute from "./routes/auth.routes.js"
import RoomRoute from "./routes/room.routes.js"
import AIRoute from "./routes/ai.routes.js"
import { toNodeHandler } from "better-auth/node";
import { auth } from "@repo/auth/auth";
const app = express()

app.use(express.json())
// app.use(cors())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.options("*", cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

const router = express.Router()

const HTTP_PORT = process.env.HTTP_PORT || 3001

app.use("/api/v1/user", UserRoute)
app.use("/api/v1/auth", AuthRoute)
app.use("/api/v1/rooms", RoomRoute)
app.use("/api/v1/ai", AIRoute)
app.all('/api/auth/{*any}', toNodeHandler(auth));

app.listen(HTTP_PORT, () => console.log("server is up @", HTTP_PORT))