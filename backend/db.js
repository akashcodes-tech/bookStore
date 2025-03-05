import mongoose from 'mongoose'

export const connectToMongoDB = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("connected to MongoDB")
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}