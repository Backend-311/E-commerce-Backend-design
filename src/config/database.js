import mongoose from "mongoose"
import config from "./config.js"

async function connecToDB() {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected to database")
    } catch (error_relatedTo_connecting_database) {
        throw new Error("Unable to connect to database,[By me]", error_relatedTo_connecting_database)
    }
}

export default connecToDB;