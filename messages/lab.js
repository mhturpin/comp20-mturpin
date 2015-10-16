function parse() {
	var request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.send();
	var messages = JSON.parse(request.responseText);
	console.log(messages);
}