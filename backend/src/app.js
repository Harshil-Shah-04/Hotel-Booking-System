import express from "express";
import cors from "cors";
import "dotenv/config";
import connectCloudinary from "./configs/cloudinary.js";
import { clerkMiddleware } from "@clerk/express";

import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

connectCloudinary();

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    /\.github\.dev$/,
    /\.vercel\.app$/
];

const corsOptions = {
    origin: (origin, cb) => {
        if (!origin) return cb(null, true);

        if (
            allowedOrigins.some(o =>
                o instanceof RegExp ? o.test(origin) : o === origin
            )
        ) {
            cb(null, true);
        } else {
            cb(new Error("CORS blocked"));
        }
    },
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working"));

app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

export default app;
