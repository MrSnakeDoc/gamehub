const express = require("express");
const ejs = require("ejs");
const config = require("./config");
const router = require("./src/router");
const games = require("./games.json");
const app = express();

app.locals.games = games;
app.locals.game = "undefined";
app.use(router);
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.listen(config.port, async () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
