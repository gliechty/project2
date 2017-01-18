var mongoose = require('mongoose');
var Schema = mongoose.schema;

var MemeSchema = mongoose.Schema({
    title: String,
    url: String,
});

var Meme = mongoose.model('Meme', MemeSchema);

module.exports = Meme;
// mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" ); //for Heroku connections