// var db = require ('./models');

// When form is filled, add a new meme to the db (within user.memes)
$(document).ready(function(){
	$("#meme form").submit(function(event){
		event.preventDefault();
		var title = $('#title').val();
		var top = $('#topText').val();
		console.log(top);
		var bottom = $('#bottomText').val();
		var img = $('#img').val();
		var newMeme = new db.Meme({"title": title, "topText": top, "bottomText": bottom, "image":img});
		newMeme.save();
		// push new meme to user.meme object
	});
});