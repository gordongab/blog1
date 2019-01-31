const db = require('../models/User');

module.exports = function (app) {


	//// GET ROUTE /////
	app.get('/api/users', function (req, res) {
		db.User.findAll({}).then(function (dbUsers) {
			res.json(dbUsers);
		});
	});



	///// POST ROUTE (NEW USER REGISTRATION) /////

	app.post('/api/register', function (req, res) {
		console.log(req.body);

		const userData = {
			username: req.body.username,
			password: req.body.password,
			passwordConf: req.body.passwordConf,
		}

		//using schema.create to insert data into the db
		db.User.create(userData, function (err, user) {
			if (err) {
				return res.json(err)
			} else {
				console.log(user)
				//return res.redirect('/profile');
			}
		});
	});



	////// LOGIN ROUTE ///////
	app.post('/api/login', function (req, res) {

		const User = {
			username: req.body.username,
			password: req.body.password
		}

		db.User.findOne({ username: User.username, password: User.password }).then(function (user) {
			if (!user) {
				res.send({ success: false });
			} else {
				res.send({ success: true });
			}

		})
	})
};