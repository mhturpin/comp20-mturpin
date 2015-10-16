function parse() {
	var request = new XMLHttpRequest();
	request.open("POST", "data.json", true);
	request.onload = function() {
		var messages = JSON.parse(request.responseText);
		console.log(messages);
	}
	request.send();
}
