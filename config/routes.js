var express = require('express');

// requires unirest for mashape API routes
var unirest = require('unirest');

var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next){
// if authenticated, continue
	if (req.isAuthenticated()) return next();
	// if not
	res.redirect('/');
}

////////////
// routes //
////////////

// gets home page 
router.route('/')
  .get(staticsController.home);

// gets signup page
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

// gets login page
router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

// allows a user to logout
router.route("/logout")
  .get(usersController.getLogout);

// shows homepage to user after successful login
router.route("/home")
  .get(authenticatedUser, usersController.home);

// Testing this route to GET meme from meme generator API

// UPDATE**now testing memegenerator as a DOM object. Can later save to this route as a .post method

router.route("/home/memes")
  .get(authenticatedUser, usersController.showMeme);

module.exports = router;