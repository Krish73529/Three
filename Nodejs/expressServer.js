import http from "http";
import express from "express";
import mongoose from "mongoose";

//!importing routes
import userRoutes from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";

//!creating express app instance
const app = express();

//server

const server = http.createServer(app);

//!connect mongodb database

mongoose
  .connect("mongodb://localhost:27017", {
    autoCreate: true,
    dbName: "3_pm_test",
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("---Database Connectio Error-----");
    console.log(error);
  });

//! parse req json body data

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});

//! using routes
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);

//!listen on port 8000
server.listen(8000, () => {
  console.log("server is up & running at http://localhost:8000");
});
