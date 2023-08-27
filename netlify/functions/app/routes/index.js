const router = require("express").Router();

module.exports = (app) => {
  router.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.use(`/`, router);
};
