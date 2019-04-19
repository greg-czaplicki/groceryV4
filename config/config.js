const config = {
  mongoURI: process.env.MONGO_URI || "mongodb://localhost/groceryV4",
  port: process.env.PORT || 3001
};

module.exports = config;
