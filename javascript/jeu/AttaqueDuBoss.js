
class AttaqueDuBoss {
	constructor() {
		this.x = 225;
		this.y = canvas.height - 25;
		this.vitesseX = 1.35;
		this.columnCount = 28;
		this.rowCount = 1;
		this.refreshDelay = 65;
		this.loopColumns = true;
		this.scale = 1;
		this.sprite = new TiledImage("images/leBossAttaque.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, 27);
	}

	tick(ctx) {

		let alive = false;

		this.x -= this.vitesseX;
		this.sprite.tick(this.x, this.y, ctx);

		if (this.x > 0) {
			alive = true;
		}

		return alive;
	}
}
