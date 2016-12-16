var passport = require("passport");

// btoa function
var btoa = require('btoa');

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
// Route to show the meme 
//put header stuff - API key - here ? Look up set headers- 

function showMeme(req, res){
	console.log("function called");
	var request = require('request');

	// unirest.get("https://ronreiter-meme-generator.p.mashape.com/meme?bottom=Hey&font=Impact&font_size=50&meme=Condescending+Wonka&top=Clay")
	// .header("X-Mashape-Key", "DKTtWY8R04mshf8JhstCrokh41I1p15gjLOjsn7L73daBC8Xdz")
	// .end(function (result) {
	//   console.log(result.status, result.headers, result.body);
	// });
	request("https://ronreiter-meme-generator.p.mashape.com/meme?bottom=Bottom+text&font=Impact&font_size=50&meme=Condescending+Wonka&top=Top+text&mashape-key=75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g", function (error, response, body){
		if (!error && response.statusCode == 200){
			// var img = new Buffer(response, 'base64').toString('ascii');
			var base64data = new Buffer(body, 'binary').toString('base64');
			console.log(base64data);
			res.render('meme.ejs', {image : base64data, btoa: btoa});
		}
	}
);}


module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  home: home,
  showMeme: showMeme
};