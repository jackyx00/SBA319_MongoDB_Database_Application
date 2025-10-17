import express from "express";
import 'dotenv/config';

const app = express();

const port = 3000;

app.use(express.json());

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
