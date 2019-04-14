
let canvas = null;
let ctx = null;
let spriteList = [];
let imageEtoile = new Image();

class Boss {
	constructor() {
		this.x = canvas.width;
		this.y = canvas.height;
		this.largeur = 50;
		this.hauteur = 50;
		this.vitesseX = 1;
		this.vitesseY = 1;
		this.xAttaque = 225;
		this.vitesseXAttaque = 1.35;

		this.columnCount = 28;
		this.rowCount = 1;
		this.refreshDelay = 65; // msec
		this.loopColumns = true;
		this.scale = 1;
		this.attaque = new TiledImage("images/leBossAttaque.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
		this.attaque.changeRow(0); // One row per animation
		this.attaque.changeMinMaxInterval(0, 27); // Loop from which column to which column?
	}

	tick() {
		this.xAttaque -= this.vitesseXAttaque;
		this.attaque.tick(this.xAttaque, this.y, ctx);
		return this.y < canvas.height ? true : false;
	}
}

	let sprite = new TiledImage("images/leBossAttaque.png", 0, 0, 10000, false, 1.0, null);
	sprite.changeRow(0); // One row per animation
	sprite.changeMinMaxInterval(0, 13); // Loop from which column to which column?

	tick();

	function tick() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		sprite.tick(145, 75, ctx);
		window.requestAnimationFrame(tick);
	}
