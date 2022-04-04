const express = require("express");
const qs = require("qs");
const path = require("path");
const morgan = require("morgan");

const connect = require("./schemas/");
const contactsRouter = require("./routes");
const idRouter = require("./routes/id");
const app = express();

connect();

app.use(morgan("dev"));
app.use("/contacts", contactsRouter);
app.use("/contacts/:id", idRouter);
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.render("mongoose", { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
