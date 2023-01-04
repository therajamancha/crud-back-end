const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  const DB_OPTION = {
    dbName: "office",
  };
  try {
    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
