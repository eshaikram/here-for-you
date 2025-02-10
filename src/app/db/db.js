import mongoose from "mongoose";

export function dbConnect() {
  console.log("Connecting to MongoDB...");

  if (mongoose.connection.readyState >= 1) {
    console.log("DB is already connected");
    return;
  }

  mongoose.connect("mongodb://localhost:27017/ForYou")
    .then((connect) => {
      console.log("DB connected:", connect.connection.name);
      console.log("db chala gya");
    })
    .catch((err) => {
      console.error("DB connection error:", err.message);
    });
}
