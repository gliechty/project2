var db = require('./models');

var memeList = [
	{
	title: "Test 1",
	url: "first url"
	},
	{
	title: "Test 2",
	url: "second url"
	},
	{
	title: "Test 3",
	url: "third url"
	}
];

db.Meme.remove({}, function(err, memes){

	db.Meme.create(memeList, function(err, memes){
		if (err) {return console.log(err); }
		console.log("created", memes.length, "memes");
		process.exit();
	});
});