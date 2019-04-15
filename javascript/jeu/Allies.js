
class Allies {
	constructor() {
		this.x = 20;
		this.y = 70;
		this.columnCount = 20;
		this.rowCount = 1;
		this.refreshDelay = 33.5;
		this.loopColumns = true;
		this.scale = 1.4;
		this.sprite = new TiledImage("images/animationAllie.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, 19);
		this.node = null;
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
