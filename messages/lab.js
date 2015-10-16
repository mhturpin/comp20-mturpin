function parse() {
	var request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onload = function() {
		var msg = JSON.parse(request.responseText);
		for (var i = 0; i < msg.length; i++) {
			document.getElementById("messages").innerHTML += "<p>" + msg[i]["content"] + " " + msg[i]["username"] + "</p>";
		};
	}
	request.send();
}
