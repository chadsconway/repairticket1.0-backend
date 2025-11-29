import express from "express";

import dotenv from "dotenv";
dotenv.config();
console.log("Environment Variables:", process.env);
console.log(`DEBUG_MODE: typeof(${process.env.DEBUG_MODE})`);
import connectDB from "./config/db.js";
import customerRoutes from "./routes/customerRoutes.js";
const port = process.env.PORT || 5000;
import cors from "cors";

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://192.168.0.187:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/customers", customerRoutes);

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
