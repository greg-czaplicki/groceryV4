const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

const serverConfig = require("../config/config");

mongoose.connect(serverConfig.mongoURL, { useNewUrlParser: true });

const app = express();

// Middleware
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());

// Routers
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Sanity Check!" });
});

// Start server
app.listen(serverConfig.port, () => {
  console.log(`🚀  Server is running on port: ${serverConfig.port}...`);
});
