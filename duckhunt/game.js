function init() {
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");

	// load and draw background
	var bkground = new Image();
	bkground.onload = function(){
		ctx.drawImage(bkground, 0, 0, 800, 600);
	};
	bkground.src = 'duckhunt-background.gif';

	// load and animate ducks
	var ducks = new Image();
	ducks.src = 'duckhunt_various_sheet.png';
	ducks.onload = function(){
		flap(bkground,ducks, ctx);
	};
}

function flap(back, ducks, ctx) {
	blue_x = 0;
	black_x = 129;
	setInterval(function() {
		// redraw background over old ducks
		ctx.drawImage(back, 0, 0, 5, 5, 330, 200, 100, 100);
		ctx.drawImage(back, 0, 0, 5, 5, 600, 150, 100, 100);

		// draw ducks
		ctx.drawImage(ducks, blue_x, 156, 38, 35, 330, 200, 100, 100);
		ctx.drawImage(ducks, black_x, 117, 38, 35, 600, 150, 100, 100);

		// set starting x position for both duck
		blue_x = (blue_x+38)%114;
		black_x = blue_x + 129;
	}, 300);
}
