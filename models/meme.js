var mongoose = require('mongoose');

var Meme = mongoose.Schema({
    title		   : String,
    topText        : String,
    bottomText     : String,
    image		   : String,
    url			   : String
});

module.exports = mongoose.model('Meme', Meme);
// mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" ); //for Heroku connections