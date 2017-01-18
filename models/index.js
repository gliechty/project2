var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/memes");

module.exports.Meme = require('./meme.js');
