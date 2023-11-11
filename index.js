// window OS에서는 cross-env 모듈 설치
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const user = require("./api/user");

const app = express();
if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", user);

// app.listen(3000, () => {
//   console.log("here");
// });

module.exports = app;
