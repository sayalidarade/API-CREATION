import express from "express";

const APP = express();

APP.get("/api/user", function (req, res) {
  res.send(["Shubham", "yash", "om"]);
});

APP.post("/api/user/add", function (req, res) {
  res.send({ msg: "User Added in DB" });
});

APP.put("/api/user/update", function (req, res) {
  res.send({ msg: "User updated in DB" });
});

APP.delete("/api/user/delete", function (req, res) {
  res.send({ msg: "User deleted in DB" });
});

APP.listen(4002, function () {
  console.log("Application Started");
});
