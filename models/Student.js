const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
});

module.exports = { Student };
