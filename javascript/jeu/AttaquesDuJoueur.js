
class AttaquesDuJoueur {
	constructor(chiffre) {

		this.x = 40;
		this.columnCount = 8;
		this.rowCount = 3;
		this.loopColumns = true;

		if (chiffre == 1) {
			this.y = canvas.height - 25;
			this.refreshDelay = 33;
			this.scale = 0.5;
			this.vitesseX = -5;
			this.accelerationX = 0.6;
			this.vitesseY = 0;
			this.accelerationY = 0;
		}
		else if (chiffre == 2) {
			this.y = canvas.height - 25;
			this.refreshDelay = 33;
			this.scale = 0.5;
			this.vitesseX = 5.5;
			this.accelerationX = 0;
			this.vitesseY = -10;
			this.accelerationY = 0.46;
		}
		else if (chiffre == 3) {
			this.y = canvas.height - 25;
			this.refreshDelay = 33;
			this.scale = 0.5;
			this.vitesseX = -5;
			this.accelerationX = 0.6;
			this.vitesseY = 1;
			this.accelerationY = 0;
		}

		this.sprite = new TiledImage("images/attaques.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeMinMaxInterval(0, 2);
		this.sprite.changeRow(chiffre - 1);
	}

	tick(ctx) {

		let alive = false;

		this.vitesseX += this.accelerationX;
		this.x += this.vitesseX;

		this.vitesseY += this.accelerationY;
		this.y += this.vitesseY;

		this.sprite.tick(this.x, this.y, ctx);

		if (this.x < canvas.width - 30) {
			alive = true;
		}

		return alive;
	}
}
