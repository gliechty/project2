var passport = require("passport");

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
	// req.get("https://ronreiter-meme-generator.p.mashape.com/meme?bottom=Bottom+text&font=Impact&font_size=50&meme=Condescending+Wonka&top=Top+text&mashape-key=75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g");
	// res.setHeader("X-Mashape-Key", "75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g");
	// (function (result) {
  		// console.log(result.status, result.headers, result.body);
	// });
	// res.render('index');
	// console.log("done");
	$.ajax({
    url: 'https://ronreiter-meme-generator.p.mashape.com/meme?bottom=Bottom+text&font=Impact&font_size=50&meme=Condescending+Wonka&top=Top+text&mashape-key=75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { console.log((data)); },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g"); // Enter here your Mashape key
    }
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