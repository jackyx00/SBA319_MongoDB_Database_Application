import express from "express";
import db from "./db/db.js"
import 'dotenv/config';
import userRoutes from "./routes/userRoutes.js"

const app = express();

const port = 3000;

app.use(express.json());

db();

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Error");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
