const User = require("../models/user.model");
const winston = require("winston");

exports.create = (req, res) => {
	if (!req.body.email) {
		return res.status(400).send({
			message: "User content can not be empty"
		});
	}

	// res.send(req.body);
	const user = new User({ ...req.body });
	user
		.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			winston.log("error", "Some error occurred while creating the User");
			res.status(500).send({
				message: err.message || "Some error occurred while creating the User."
			});
		});
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
	User.find()
		.then(users => {
			res.send(users);
		})
		.catch(err => {
			winston.log(err.message || "Some error occurred while retrieving Users.");
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving Users."
			});
		});
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
	User.findById(req.params.userid)
		.then(user => {
			if (!user) {
				return res.status(404).send({
					message: "User not found with id " + req.params.UserId
				});
			}
			res.send(user);
		})
		.catch(err => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "User not found with id " + req.params.UserId
				});
			}
			return res.status(500).send({
				message: "Error retrieving user with id " + req.params.UserId
			});
		});
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body.email) {
		return res.status(400).send({
			message: "Email content can not be empty"
		});
	}

	// Find User and update it with the request body
	User.findByIdAndUpdate(
		req.params.userid,
		{
			name: req.body.name || "Unnamed User",
			email: req.body.email
		},
		{ new: true }
	)
		.then(user => {
			if (!user) {
				return res.status(404).send({
					message: "User not found with id " + req.params.userid
				});
			}
			res.send(user);
		})
		.catch(err => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "User not found with id " + req.params.userid
				});
			}
			return res.status(500).send({
				message: "Error updating User with id " + req.params.userid
			});
		});
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {};
