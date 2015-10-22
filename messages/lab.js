function parse() {
	var request = new XMLHttpRequest();
	request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200){
			var msg = JSON.parse(request.responseText);
			for (var i = 0; i < msg.length; i++) {
				document.getElementById("messages").innerHTML += "<p>" + msg[i]["content"] + " -" + msg[i]["username"] + "</p>";
			}
		}
		else if(request.readyState == 4) {
			document.getElementById("messages").innerHTML = "<p>" + "Something went wrong" + "</p>";
		}
		else 
			return false;
	}
	request.send(null);
}
