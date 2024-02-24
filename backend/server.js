import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app= express()
const PORT= process.env.PORT||5000

dotenv.config();

app.use(express.json()) //To Parse incoming requests with a JSON payload
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT,()=>
{   
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
}
)