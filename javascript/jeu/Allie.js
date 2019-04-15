
class Allie {
	constructor(chiffre) {

		this.columnCount = 20;
		this.rowCount = 1;
		this.refreshDelay = 33.5;
		this.loopColumns = true;
		this.scale = 1.38;

		if (chiffre == 0) {
		}
		else if (chiffre == 1) {
			this.x = 20;
			this.y = 68;
		}
		else if (chiffre == 2) {
			this.x = 40;
			this.y = 60;
		}
		else if (chiffre == 3) {
			this.x = 60;
			this.y = 73;
		}

		this.sprite = new TiledImage("images/animationAllie.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
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
