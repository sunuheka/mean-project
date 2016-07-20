var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {

	User.find({}, function(err, users) {
	  if (err) throw err;

	  res.json(users);
	});
});

router.post('/', function(req, res){
	var user = new User({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password,
		admin: req.body.admin,
		location: req.body.location,
		meta: {
			website: req.body.website,
			age: req.body.age
		}
	});

	user.save(function(err){
		if (err) {
			res.json({
				status: 'error',
				message: err.errmsg
			})
		}

		res.json({status:'success'});
	});
});

module.exports = router;
