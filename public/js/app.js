function doIt() {
	// get form field info	
	var title = document.getElementById('title').value;
	var topText = document.getElementById('topText').value;
	var bottomText = document.getElementById('bottomText').value;
	var image = document.getElementById('img').value;
	var encodedImg = encodeURI(image);
	// create an image element and set attributes
	var newMeme = document.createElement('img');
	newMeme.setAttribute('src', "https://ronreiter-meme-generator.p.mashape.com/meme?bottom="+encodeURI(bottomText)+"&font=Impact&font_size=50&meme="+encodeURI(image)+"&top="+encodeURI(topText)+"&mashape-key=75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g");
	var imageDiv=document.getElementById('image-div');
	var titleImage=document.getElementById('meme-title');
	titleImage.innerHTML=title;
	imageDiv.appendChild(newMeme);
}