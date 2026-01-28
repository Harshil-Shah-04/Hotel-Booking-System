import User from "../models/User.js";
import connectDB from "../configs/db.js";

export const protect = async (req, res, next) => {
    try {
        const { userId } = req.auth;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not Authenticated",
            });
        }

        await connectDB();

        let user = await User.findById(userId);

        if (!user) {
            user = await User.create({ _id: userId });
        }

        req.user = user;
        next();


    } catch (error) {
        console.error("Protect middleware error:", error);
        res.status(401).json({
            success: false,
            message: "Authentication failed",
        });
    }
};
