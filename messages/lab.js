function parse() {
	var request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onload = function() {
		var messages = JSON.parse(request.responseText);
		console.log(messages);
	}
	request.send();
}
