const config = {
  mongoURL: process.env.MONGO_URL || "mongodb://localhost/groceryV4",
  port: process.env.PORT || 3001
};

module.exports = config;
