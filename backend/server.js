import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from "@clerk/express"

connectDB()

const app = express()

app.use(express.json())
app.use(cors()) //Enable Cross-Origin Resource Sharing
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send("API is working"))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
