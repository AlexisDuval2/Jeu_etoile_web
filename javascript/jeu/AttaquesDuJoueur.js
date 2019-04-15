
class AttaquesDuJoueur {
	constructor(chiffre) {
		this.x = 40;
		this.y = canvas.height - 30;
		this.vitesseX = 3;
		this.columnCount = 8;
		this.rowCount = 4;
		this.refreshDelay = 65;
		this.loopColumns = true;
		this.scale = 1;
		this.sprite = new TiledImage("images/attaques.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeMinMaxInterval(0, 3);

		this.sprite.changeRow(chiffre - 1);
	}

	tick(ctx) {

		let alive = false;

		this.x += this.vitesseX;
		this.sprite.tick(this.x, this.y, ctx);

		if (this.x < canvas.width - 30) {
			alive = true;
		}

		return alive;
	}
}
