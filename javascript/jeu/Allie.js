
class Allie {
	constructor(chiffre) {

		this.chiffre = chiffre;
		this.vitesseX = 0.03;

		if (this.chiffre == 1) {
			this.x = 25;
			this.y = 65;
			this.scale = 0.85;
			this.refreshDelay = 51;
		}
		else if (this.chiffre == 2) {
			this.x = 53;
			this.y = 35;
			this.scale = 0.38;
			this.refreshDelay = 29;
		}
		else if (this.chiffre == 3) {
			this.x = 93;
			this.y = 55;
			this.scale = 0.7;
			this.refreshDelay = 78;
		}

		this.columnCount = 20;
		this.rowCount = 3;
		this.loopColumns = true;

		this.sprite = new TiledImage("images/animationAllie.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(this.chiffre - 1);
		this.sprite.changeMinMaxInterval(0, 19);
	}

	tick(ctx) {

		let alive = false;

		this.x += this.vitesseX;

		this.sprite.tick(this.x, this.y, ctx);

		if (this.chiffre == 1 &&  this.x < 30) {
			alive = true;
		}
		else if (this.chiffre == 2 &&  this.x < 58) {
			alive = true;
		}
		else if (this.chiffre == 3 &&  this.x < 98) {
			alive = true;
		}

		return alive;
	}
}
