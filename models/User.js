const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: 'You must enter a username'
	},
	password: {
		type: String,
		required: 'You must enter a password'
	},
	passwordConf: {
		type: String,
		required: 'Passwords need to match'
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;