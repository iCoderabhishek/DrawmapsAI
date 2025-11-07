import express from "express"
import cors from "cors"
import  UserRoute  from "./routes/user.routes.js"
import SignUpRoute from "./routes/auth.routes.js"
const app = express()

app.use(express.json())
app.use(cors())
const router = express.Router()

const HTTP_PORT = process.env.HTTP_PORT || 3001

app.use("/api/v1/user", UserRoute)
app.use("/api/v1/auth", SignUpRoute)


app.listen(HTTP_PORT, () => console.log("server is up @", HTTP_PORT))