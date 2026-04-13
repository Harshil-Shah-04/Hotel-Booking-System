// import User from "../models/User.js"

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {

    const { userId } = req.auth;

    if (!userId) {
        res.json({ success: false, message: "Not Authenticated" })
    } else {
        req.user = await User.findById(userId) // ← must be a Mongoose doc for .save() to work
        if (!req.user) return res.status(401).json({ success: false, message: "User not found" })
        next()
    }
}