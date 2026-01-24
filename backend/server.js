import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from "@clerk/express"
import clerkWebhooks from "./controllers/clerkWebhooks.js"

connectDB()

const app = express()

app.use(express.json())
//Enable Cross-Origin Resource Sharing
app.use(cors())
app.use(clerkMiddleware())
// API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks)

app.get('/', (req, res) => res.send("API is working"))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// # Logs
// logs
// *.log
// npm-debug.log*
// yarn-debug.log*
// yarn-error.log*
// pnpm-debug.log*
// lerna-debug.log*

// node_modules
// dist
// dist-ssr
// .env
// *.local

// # Editor directories and files
// .vscode/*
// !.vscode/extensions.json
// .idea
// .DS_Store
// *.suo
// *.ntvs*
// *.njsproj
// *.sln
// *.sw?
