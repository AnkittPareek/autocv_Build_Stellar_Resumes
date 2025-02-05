const express = require("express");
const connectDB = require("./config/dbConfig");
require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

// Use CORS middleware
app.use(cors());
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/resume", resumeRoutes);
app.use("/api/v1/payment", paymentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
