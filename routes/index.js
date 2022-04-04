const express = require("express");
const template = require("../lib/template");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
    var title = "Index";
    var html = template.HTML(title, users);
    res.send(html);
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get("/new", (req, res) => {
  var title = "New";
  var html = template.HTML(
    title,
    `
    <form action="/contacts" method="post">
      <p><input type="text" name="name" placeholder="name"></p>
      <p><input type="text" name="email" placeholder="Email"></p>
      <p><input type="text" name="phone" placeholder="Phone"></p>
      <p><input type="submit"></p>
    </form>
    `
  );
  res.send(html);
});

module.exports = router;
