const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const { Todos } = require("./../models/todos");

router.get("/", async (req, res) => {
  await res.send("Dashboard");
  // const todos = await Todos.find().select("-__v");
  // res.send(todos);
});

module.exports = router;
