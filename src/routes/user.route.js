const express = require("express");
const router = express.Router();
const winston = require("winston");
const mongoose = require("mongoose");
const users = require("../controllers/user.controller");
const auth = require("../middleware/auth");

router.use(auth);
router.get("/", async (req, res) => {
	// const { error } = validate(req.body);
	// if (error) return res.status(400).send(error.details[0].message);
	winston.log("info", req.user);
	users.findAll(req, res);
});

router.get("/:userid", async (req, res) => {
	users.findOne(req, res);
});

router.post("/", async (req, res) => {
	users.create(req, res);
});

router.put("/:userid", async (req, res) => {
	users.update(req, res);
});

router.delete("/:userid", async (req, res) => {
	users.delete(req, res);
});

module.exports = router;
