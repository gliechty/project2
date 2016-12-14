var passport = require("passport");

// requiring unirest for API consumption
var unirest = require('unirest');

// GET /signup
function getSignup(request, response) {
	response.render('signup.ejs', {message: request.flash('signupMessage')});
}

// POST /signup
function postSignup(request, response) {
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash : true
	});
	return signupStrategy(request, response);
}

// GET /login
function getLogin(request, response) { 
	response.render('login.ejs', {message: request.flash('loginMessage')});
}

// POST /login 
function postLogin(request, response) {
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash : true
	});
	return loginStrategy(request, response);
}

// GET /logout
function getLogout(request, response) {
	request.logout();
	response.redirect('/');
}

// Main page
function home(request, response){
	response.render('home.ejs', {message: request.flash('You Got it')});
}

//******************************
// Route to show the meme //add!!!
//put header stuff - API key - here ? Look up set headers- 
// part of request header (object notation) w/ mashape key and key
// look up pass api key through header
function showMeme(request, response){
	unirest.get("https://ronreiter-meme-generator.p.mashape.com/meme?bottom=Bottom+text&font=Impact&font_size=50&meme=Condescending+Wonka&top=Top+text")
	.header("X-Mashape-Key", "DKTtWY8R04mshf8JhstCrokh41I1p15gjLOjsn7L73daBC8Xdz")
	.end(function (result) {
  		console.log(result.status, result.headers, result.body);
	});
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  home: home,
  showMeme: showMeme
};