import express from "express";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import customerRoutes from "./routes/customerRoutes.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/customers", customerRoutes);

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
