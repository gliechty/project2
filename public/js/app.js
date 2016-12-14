
$(document).ready(function(){
	$("#meme form").submit(function(event){
		event.preventDefault();
		var top = $('#topText').val();
		var bottom = $('#bottomText').val();
		var img = $('#img').val();
		var $newMeme = $.get('http://apimeme.com/meme?meme='+encodeURIComponent(img)+'&top='+encodeURIComponent(top)+'&bottom='+encodeURIComponent(bottom)+'').done(function(response){
			console.log(response);
			// $('body').append(response)
		});
	});
});