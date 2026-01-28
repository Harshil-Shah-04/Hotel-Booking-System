import express from "express"
import cors from "cors"
import "dotenv/config"
import connectCloudinary from "./configs/cloudinary.js"
import { clerkMiddleware } from "@clerk/express"
import clerkWebhooks from "./controllers/clerkWebhooks.js"
import userRouter from "./routes/userRoutes.js"
import hotelRouter from "./routes/hotelRoutes.js"
import roomRouter from "./routes/roomRoutes.js"
import bookingRouter from "./routes/bookingRoutes.js"

connectCloudinary()

const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://legendary-palm-tree-g6qr4995q9wfv47r-5173.app.github.dev"
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

app.use(express.json())

app.use(clerkMiddleware())
app.use("/api/clerk", clerkWebhooks)

app.get('/', (req, res) => res.send("API is working"))

app.use('/api/user', userRouter)
app.use('/api/hotels', hotelRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/bookings', bookingRouter)

export default app
