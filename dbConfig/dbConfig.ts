import mongoose from "mongoose";

import dns from "node:dns/promises";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error:", err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connecting to db", error);
  }
}

