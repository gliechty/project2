// var express      = require('express');
// var unirest 	 = require('unirest');

$(document).ready(function(){
	$("#meme form").submit(function(event){
		event.preventDefault();

		var top = $('#topText').val();
		var bottom = $('#bottomText').val();
		var img = $('#img').val();
		console.log(top);
		console.log(bottom);

		// var meme = $.get('http://apimeme.com/meme?meme='+encodeURIComponent(img)+'&top='+encodeURIComponent(top)+'&bottom='+encodeURIComponent(bottom)+'');
		// console.log(meme);
		// $('#meme').append(meme);

		// 	console.log(result);
			// console.log(result.status, result.headers, result.body);
	});
});