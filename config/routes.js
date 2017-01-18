var express = require('express');
var app = express();

var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
var memesController = require('../controllers/memes');

function authenticatedUser(req, res, next){
// if authenticated, continue
	if (req.isAuthenticated()) return next();
	// if not
	res.redirect('/');
}

//////////////
// passport //
// routes ////
//////////////

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

/////////////////
// meme routes //
/////////////////

// gets/posts saved memes
router.route("/home/meme")
  .get(memesController.getMemes)
  .post(memesController.postMemes);

router.route("/home/meme/:id")
  .delete(memesController.deleteMeme);


module.exports = router;


// 