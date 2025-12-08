const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/movies";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully...");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

module.exports = connectDB;
