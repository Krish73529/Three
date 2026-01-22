import http from "http";
import express from "express";

//!importing routes
import userRoutes from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";

//!creating express app instance
const app = express();

//server

const server = http.createServer(app);

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
