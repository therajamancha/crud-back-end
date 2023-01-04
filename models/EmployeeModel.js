const mongoose = require("mongoose");

const employeeScema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  lname: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("employee", employeeScema);
