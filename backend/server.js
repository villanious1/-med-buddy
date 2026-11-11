import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();
const port = process.env.PORT || 8000;
const allowedOrigins = process.env.CORS_ORIGIN
  ?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// middlewares
app.use(express.json());
app.use(cors({ origin: allowedOrigins?.length ? allowedOrigins : true }));

app.get("/health", (req, res) => {
  const isDatabaseConnected = mongoose.connection.readyState === 1;
  res.status(isDatabaseConnected ? 200 : 503).json({
    success: isDatabaseConnected,
    status: isDatabaseConnected ? "healthy" : "database unavailable",
  });
});

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// default route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Med Buddy API",
    status: "API is running successfully",
    frontend: "https://med-buddy-web.vercel.app/",
    admin_portal: "https://med-buddy-admin.vercel.app/",
  });
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();
    app.listen(port, () => console.log(`Server is running on PORT ${port}`));
  } catch (error) {
    console.error("Failed to start API:", error);
    process.exitCode = 1;
  }
};

startServer();
