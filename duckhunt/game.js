function init() {
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");
	var bkground = new Image();
	bkground.onload = function(){
		ctx.drawImage(bkground, 0, 0, 800, 600);
	};
	bkground.src = 'duckhunt-background.gif';

	var ducks = new Image();
	ducks.src = 'duckhunt_various_sheet.png';
	ducks.onload = function(){
		ctx.drawImage(ducks, 35, 150, 40, 40, 330, 200, 100, 100);
		ctx.drawImage(ducks, 210, 115, 40, 40, 600, 150, 100, 100);
	};
}
