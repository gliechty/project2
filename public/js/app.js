$(document).ready(function(){
	$("#meme form").submit(function(event){
		event.preventDefault();
		var top = $('#topText').val();
		var bottom = $('#bottomText').val();
		var img = $('#img').val();
		// $.get('http://apimeme.com/meme?meme='+encodeURIComponent(img)+'&top='+encodeURIComponent(top)+'&bottom='+encodeURIComponent(bottom)+'&mashape-key=75YmJBAs6kmshPHOtokBTccTVQYYp1h379tjsnh2ftavbqSb5g', function(response){
		// 	$('#meme').append(response);
		// });
	});
});