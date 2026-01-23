<<<<<<< HEAD
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
=======
import http from "http";
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("/", (req, res) => {
  res.status(404).send("404-Page not found");
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});
>>>>>>> a3d051c319bbd75979d67048a6ff03bc2622d32c
