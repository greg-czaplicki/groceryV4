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

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Routes
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);

// // Error handler
// app.use((err, req, res, next) => {
//   const error = app.get("env") === "development" ? err : {};
//   const status = error.status || 500;

//   res.status(status).json({
//     error: {
//       message: error.message
//     }
//   });
//   console.error(err);
// });

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Start server
app.listen(serverConfig.port, () => {
  console.log(`🚀  Server is running on port: ${serverConfig.port}...`);
});
