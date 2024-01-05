const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function () {
  const db =
    "mongodb+srv://ayshazahid25:t19ynDD6sCBxGuJ7@cluster0.ll6bgck.mongodb.net/?retryWrites=true&w=majority";
  mongoose
    .connect(db, { useUnifiedTopology: true })
    .then(() => winston.info(`Connected to ${db}...`));
};
