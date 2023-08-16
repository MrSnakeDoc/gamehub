const express = require("express");
const router = express.Router();
const games = require("../games.json");
const chooseView = require("./middleware/js/chooseView");
module.exports = router;
router.use(express.static("./src/public"));

router.use("/favicon.ico", (req, res) => {
  res.status(204);
  res.end();
});

router.get("/", (req, res) => {
  req.app.locals.game = {};
  res.render("index");
});
router.use("/game/:nomDuJeu", (req, res) => {
  let view = chooseView.choose(req.params.nomDuJeu, games);
  view
    ? (req.app.locals.game = {
        title: view.title,
        cssFile: view.cssFile,
        jsFile: view.jsFile,
      })
    : (req.app.locals.game = {
        title: "Error 404",
      });
  view ? view : (view = { name: "404" });
  res.render(view.name);
});

router.use("/*", (req, res) => {
  req.app.locals.game = {
    title: "Error 404",
  };
  res.render("404");
});
