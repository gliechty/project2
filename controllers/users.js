var passport = require("passport");
var express = require('express');
var app = express();
var db = require('../models');

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
		successRedirect: '/home',
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


// // Route to show saved memes
// app.get('/home/meme', function showMeme(req, res){
// 	res.render('meme.ejs');
// });

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  home: home,
  // postMeme : postMeme,
  // showMeme: showMeme
};