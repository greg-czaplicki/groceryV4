const config = {
  mongoURL:
    "mongodb://greg:greg@cluster0-coxov.mongodb.net/test?retryWrites=true" ||
    "mongodb://localhost/groceryV4",
  port: process.env.PORT || 3001
};

module.exports = config;
