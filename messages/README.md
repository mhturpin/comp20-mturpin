1. The messages and usernames display correctly. It works on both the file and 
on the URL. I made the text blue
2. I looked at:
	http://www.w3schools.com/json/json_http.asp
	And the example we did in class
3. I spent about an hour on this 

Is it possible to request the data from a different origin?
	It works for the URL but not for file:///. When I try to use file:/// I get
an error about cross origin requests. The URL works because the same origin 
policy restrictions were turned off for that file. It doesn't work on the file
because javascript isn't allowed to read or write files that don't have the same
origin as it.