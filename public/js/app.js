// var express      = require('express');
// var unirest 	 = require('unirest');

$(document).ready(function(){
	alert('hey');
	$("#meme form").submit(function(event){
		event.preventDefault();
		var top = $('#topText').val();
		var bottom = $('#bottomText').val();
		var img = $('#img').val();
		// unirest.get("https://ronreiter-meme-generator.p.mashape.com/meme?bottom=Bottom+text&font=Impact&font_size=50&meme=Condescending+Wonka&top=Top+text")
		unirest.get('http://apimeme.com/meme?meme='+encodeURIComponent(img)+'&top='+encodeURIComponent(top)+'&bottom='+encodeURIComponent(bottom)+'')
		// .header("X-Mashape-Key", "DKTtWY8R04mshf8JhstCrokh41I1p15gjLOjsn7L73daBC8Xdz")
		// .end(function (result) {
			console.log(result);
			// console.log(result.status, result.headers, result.body);
		});
	});
});