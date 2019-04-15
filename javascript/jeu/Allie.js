
class Allie {
	constructor(chiffre) {

		if (chiffre == 0) {
			this.x = 25;
			this.y = 65;
			this.scale = 0.85;
			this.refreshDelay = 51;
		}
		else if (chiffre == 1) {
			this.x = 53;
			this.y = 35;
			this.scale = 0.38;
			this.refreshDelay = 29;
		}
		else if (chiffre == 2) {
			this.x = 93;
			this.y = 55;
			this.scale = 0.7;
			this.refreshDelay = 78;
		}

		this.columnCount = 20;
		this.rowCount = 3;
		this.loopColumns = true;

		this.sprite = new TiledImage("images/animationAllie.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(chiffre);
		this.sprite.changeMinMaxInterval(0, 19);
	}

	tick(ctx) {

		this.sprite.tick(this.x, this.y, ctx);
		return true;
		// if (this.alive) {
		// 	this.sprite.tick(this.x, this.y, ctx);
		// }
		// return this.alive;
	}
}
