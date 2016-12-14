// var express      = require('express');
// var unirest 	 = require('unirest');

$(document).ready(function(){
	$.get('/home/meme', function (data){
	$('#meme').append(data);
	});
	$("#meme form").submit(function(event){
		event.preventDefault();
		});

		// var top = $('#topText').val();
		// var bottom = $('#bottomText').val();
		// var img = $('#img').val();

		// unirest.get('http://apimeme.com/meme?meme='+encodeURIComponent(img)+'&top='+encodeURIComponent(top)+'&bottom='+encodeURIComponent(bottom)+'');
		
		// 	console.log(result);
			// console.log(result.status, result.headers, result.body);
	});
});