const User = require("../models/user.model");
const winston = require("winston");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtPrivateKey = config.get("jwtPrivateKey");

exports.login = async (req, res) => {
	if (!req.body.email) {
		return res.status(400).send({
			message: "User content can not be empty!"
		});
	}

	const objUser = await User.findOne({ email: req.body.email }).then(user => {
		return user;
	});

	if (objUser == null) {
		return res.status(400).send("User not found");
	}

	// const payload = { objUser.email, objUser.}
	try {
		if (await bcrypt.compare(req.body.password, objUser.password)) {
			jwt.sign({ objUser }, jwtPrivateKey, (err, token) => {
				res.send(token);
			});
		} else {
			res.send("not allowed");
		}
	} catch (e) {
		winston.log("error", e);
		res.status(500).send(e);
	}

	// res.json(objUser);
};
