const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	firstName: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 50
	},
	lastName: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 50
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	}
});

UserSchema.pre("save", function(next) {
	this.password = bcrypt.hashSync(this.password, saltRounds);
	next();
});

module.exports = mongoose.model("User", UserSchema);

// exports.Todos = Todos;
