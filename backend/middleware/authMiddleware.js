import User from '../models/User.js'

export const protect = async (req, res, next) => {

    const { userId } = req.auth;

    if (!userId) {
        res.json({ success: false, message: "Not Authenticated" })
    } else {
        req.user = await User.findById(userId)
        if (!req.user) return res.status(401).json({ success: false, message: "User not found" })
        next()
    }
}