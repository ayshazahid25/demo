const app = require("./src/startup/express");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});
require("./src/startup/logging")();
require("./src/startup/routes")(app);
require("./src/startup/database")();
// require("./src/startup/config")();
require("./src/startup/prod")(app);
const server = require("./src/startup/port");
