import mongoose from 'mongoose'

let cached = global._mongooseCache || (global._mongooseCache = {conn: null, promise: null})

const connectDB = async () => {
    if (cached.conn) return cached.conn

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            bufferCommands: false,
        })
    }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB
