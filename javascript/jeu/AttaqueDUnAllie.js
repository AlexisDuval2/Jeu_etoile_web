
class AttaqueDUnAllie {
	constructor() {

		this.x = 75;
		this.vitesseX = -1;
		this.accelerationX = 0.25;

		this.y = 65;
		this.vitesseY = -1;
		this.accelerationY = 0.11;

		this.columnCount = 5;
		this.rowCount = 1;
		this.refreshDelay = 25;
		this.loopColumns = true;
		this.scale = 0.7;

		this.sprite = new TiledImage("images/animationAllieAttaque.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, 4);
	}

	tick(ctx) {

		let alive = false;

		this.vitesseX += this.accelerationX;
		this.x += this.vitesseX;

		this.vitesseY += this.accelerationY;
		this.y += this.vitesseY;

		this.sprite.tick(this.x, this.y, ctx);

		if (this.x < canvas.width - 30 && this.y <= canvas.height - 25) {
			alive = true;
		}

		return alive;
	}
}
