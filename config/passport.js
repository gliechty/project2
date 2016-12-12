var LocalStrategy = require('passport-local').Strategy;
var User = require ('../models/user');

module.exports = function(passport){

    passport.serializeUser(function(user, callback) {
      callback(null, user.id);
    });

    passport.deserializeUser(function(id, callback) {
      User.findById(id, function(err, user) {
          callback(err, user);
      });
    });
	passport.use('local-signup', new LocalStrategy({
		usernameField : 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback){
		// Find a user with this email
		User.findOne({ 'local.email': email}, function (err, user){
			if (err) return callback(err);

			if (user) {
				return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
			} else {
				// create a user with this email
				var newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.encrypt(password);

				newUser.save(function(err){
					if (err) throw err;
					return callback(null, newUser);
				});
			}
		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback){
		User.findOne({ 'local.email' : email}, function(err, user){
			if (err) {return callback(err);}
			if (!user){
				return callback(null, false, req.flash('loginMessage', 'no user found with that email'));
			}
			if (!user.validPassword(password)) {
				return callback(null, false, req.flash('loginMessage', 'Oops, wrong password'));
			}
			return callback(null, user);
		});
	}));
};