var passport = require("passport");
var express = require('express');
var app = express();
var db = require('../models');

// get memes- works!!!
function getMemes(req, res){
	db.Meme.find().then(function(memes){
		res.json(memes);
	});
}

// post meme- works !!!!!!!!
function postMemes(req, res) {
  // create new book with form data (`req.body`)
  var newMeme = new db.Meme(req.body);
  // add newBook to database
  newMeme.save(function(err, meme){
    if (err) { return console.log("create error: " + err); }
    console.log("created ", meme.title);
    res.json(meme);
  });
}

// delete meme
function deleteMeme(req, res){
	db.Meme.findById(req.params.id)
	.then(function(meme){
		if(!meme) return error(res, "not found");
		return meme.destroy();
	})
	.then(function(){
		res.redirect("/home/meme");
	});
}

module.exports ={
	getMemes : getMemes,
	postMemes : postMemes,
	deleteMeme : deleteMeme
};