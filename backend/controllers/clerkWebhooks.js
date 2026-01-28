import { Webhook } from "svix";
import User from "../models/User.js";
import connectDB from "../configs/db.js";

const clerkWebhooks = async (req, res) => {
    try {
        await connectDB();

        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        await webhook.verify(JSON.stringify(req.body), headers);

        const { data, type } = req.body;

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
            image: data.image_url,
        };

        switch (type) {
            case "user.created":
                await User.create(userData);
                break;

            case "user.updated":
                await User.findByIdAndUpdate(data.id, userData);
                break;

            case "user.deleted":
                await User.findByIdAndDelete(data.id);
                break;

            default:
                break;
        }

        res.json({ success: true, message: "Webhook received" });
    } catch (error) {
        console.error("Clerk webhook error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export default clerkWebhooks;
