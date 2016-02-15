function shareIt(text, article_url, app) {
	
	var url = "";
	if(app=="facebook"){
		url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(article_url);
	}
	else if(app=="twitter"){
		url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "%20" + encodeURIComponent(article_url) + "%20via%20" + encodeURIComponent("@Daily_Fives");
	}
	else if(app="email"){
		url = "mailto:someone@example.com?subject=" + encodeURIComponent(text) + "&body="+ article_url;
	}
	window.open(url);
}