const mongoose = require("mongoose");

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subheadings: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Research", researchSchema);
