const db = require('../models/User');

module.exports = function (app) {


	//// GET ROUTE /////
	app.get('/api/users', function (req, res) {
		db.findAll({}).then(function (dbUsers) {
			res.json(dbUsers);
		});
	});



	///// POST ROUTE (NEW USER REGISTRATION) /////

	app.post('/api/register', function (req, res) {
		console.log("register route here");

		const userData = {
			username: req.body.username,
			password: req.body.password,
			passwordConf: req.body.passwordConf,
		}
		console.log("userData", userData);

		//using schema.create to insert data into the db
		db.create(userData, function (err, user) {
			if (err) {
				return res.json(err)
			} else {
				console.log(user)
				}
		});
	});



	////// LOGIN ROUTE ///////
	app.post('/api/login', function (req, res) {

		const User = {
			username: req.body.username,
			password: req.body.password
		}

		console.log(User, " this is the user")

		db.find({ username: User.username, password: User.password }).then(function (user) {
			console.log(user, "user from db")
			if (!user) {
				res.send({ success: false });
			} else {
				console.log("there is a user")
				res.send({ success: true });
			}

		})
	})
};