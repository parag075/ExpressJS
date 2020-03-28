const express = require("express");
const router = express.Router();
const winston = require("winston");
const mongoose = require("mongoose");
const authController = require("../controllers/auth.controller");

router.get("/", async (req, res) => {
	await res.send("auth");
});

router.post("/login", (req, res) => {
	authController.login(req, res);
});

module.exports = router;
