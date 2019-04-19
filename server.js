const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const itemsRouter = require("./routes/items");
const categoriesRouter = require("./routes/categories");

const serverConfig = require("./config/config");

mongoose.connect(serverConfig.mongoURL, { useNewUrlParser: true });

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

// Error handler
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = error.status || 500;

  res.status(status).json({
    error: {
      message: error.message
    }
  });
  console.error(err);
});

// Server static assets if in PRODUCTION
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Routes
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);

// Start server
app.listen(serverConfig.port, () => {
  console.log(`🚀  Server is running on port: ${serverConfig.port}...`);
});
