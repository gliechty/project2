function doIt() {
	// get form field info	
	var title = $('#title').val();
	var topText = $('#topText').val();
	var bottomText = $('#bottomText').val();
	var image = $('#img').val();
	var encodedImg = encodeURI(image);
	// create an image element and set attributes
	var newMeme = $('<img>').attr('src', "https://ronreiter-meme-generator.p.mashape.com/meme?bottom="+encodeURI(bottomText)+"&font=Impact&font_size=50&meme="+encodeURI(image)+"&top="+encodeURI(topText)+"&mashape-key=75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g");
	var imageDiv= $('#image-div');
	var titleImage= $('#meme-title');
	titleImage.html(title);
	(imageDiv).append(newMeme);
	$('#save-button').show();
	$('#refresh').show();
	$('#generate').hide();
}

function saveIt() {
	var title = $('#title').val().toString();
	var topText = $('#topText').val();
	var bottomText = $('#bottomText').val();
	var img = $('#img').val();
	var	image = "https://ronreiter-meme-generator.p.mashape.com/meme?bottom="+encodeURI(bottomText)+"&font=Impact&font_size=50&meme="+encodeURI(img)+"&top="+encodeURI(topText)+"&mashape-key=75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g";
	var formObject = {
		title: title, 
		url: image
	};
	$.post('/home/meme', formObject, function(){
		console.log('route hit');
	});
}
