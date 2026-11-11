import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected!"));
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI must be set before starting the API.");
  }

  await mongoose.connect(process.env.MONGODB_URI, { dbName: "prescripto" });
};

export default connectDB;
