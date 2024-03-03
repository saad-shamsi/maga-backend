import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDB() {
    try {
        const connectionInstansce = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongodb connected to ${connectionInstansce.connection.name}`)
    } catch (error) {
        console.log("Mongodb connection error", error)
        process.exit(1)
    }
}

export default connectDB;