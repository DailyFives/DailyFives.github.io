function randomFive(){
	var post_count = $("#postcount").val();
	var randomNumber = Math.floor(Math.random()*(post_count-1+1)+1);
	window.location = "../" + randomNumber;
}