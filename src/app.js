import express from "express";
import authRoutes from "./routes/auth.routes.js";
import featuresRoutes from "./routes/features.routes.js";

const app = express();

app.use(express.json());

// APIs prefixes
app.use("/api/auth",authRoutes);
app.use("/api/feature",featuresRoutes);

export default app;