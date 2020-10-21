//Connection to MongoDB

const mongoose = require("mongoose");
const config = require("config");
const DB_URI = config.get("mongoURI");
//const DB_DEV_URI = config.get('mongoURI_dev');

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
