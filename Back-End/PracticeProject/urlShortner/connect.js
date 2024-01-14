const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  connectToMongoDB,
};
