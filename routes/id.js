const express = require("express");
const template = require("../lib/template");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    var title = "Show";
    var html = template.HTML(
      title,
      `
    <form action="/" method="put">
        <a href="/contacts/:id">Edit</a>
    </form>
    <form action="/" method="delete">
        <a href="/contacts/:id">Delete<a/>
    </form>
        `
    );
    res.send(html);
  })
  .put((req, res) => {
    var title = "Edit";
    var html = template.HTML(
      title,
      `
    <form action="/" method="put">
      <p><input type="text" name="name" placeholder="name"></p>
      <p><input type="text" name="Email" placeholder="Email"></p>
      <p><input type="text" name="Phone" placeholder="Phone"></p>
      <p><input type="submit"></p>
    </form>
    `
    );
    res.send(html);
  })
  .delete((req, res) => {
    res.send("delete");
  });

router.get("/edit", (req, res) => {
  var title = "Edit";
  var id = req.params.id;
  res.send(`<h1>${title}</h1>${id}`);
});

module.exports = router;
