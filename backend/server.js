// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
const mongoURI =
  "mongodb+srv://shayaliza:chaiforlife@cluster0.hn1kv1u.mongodb.net/?retryWrites=true&w=majority";

// Create a Mongoose connection
mongoose.connect(mongoURI);
const db = mongoose.connection;

// Log MongoDB connection status
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a Mongoose schema for custom domains
const customDomainSchema = new mongoose.Schema({
  route: String,
  customDomain: String,
});

// Create a Mongoose model based on the schema
const CustomDomain = mongoose.model("CustomDomain", customDomainSchema);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API endpoint to update custom domains
app.post("/api/updateCustomDomain", async (req, res) => {
  const { route, customDomain } = req.body;

  // Update or insert the custom domain in MongoDB
  await CustomDomain.findOneAndUpdate(
    { route },
    { customDomain },
    { upsert: true }
  );

  res.json({ success: true });
});

// API endpoint to retrieve custom domains
app.get("/api/customDomains", async (req, res) => {
  // Retrieve all custom domains from MongoDB
  const customDomains = await CustomDomain.find();

  res.json(customDomains);
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
