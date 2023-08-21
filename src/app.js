import express from "express";
import { initAPIRoutes } from "./routes/routes.js";

const app = express();
app.use(express.json()); //! Middleware para leer json
app.use("/api", initAPIRoutes());

export default app;
