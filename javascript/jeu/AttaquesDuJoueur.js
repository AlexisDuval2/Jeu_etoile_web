
class AttaquesDuJoueur {
	constructor(chiffre) {

		this.x = 40;
		this.columnCount = 8;
		this.rowCount = 3;
		this.loopColumns = true;

		if (chiffre == 1) {
			this.y = canvas.height - 25;
			this.refreshDelay = 33;
			this.scale = 0.45;
			this.vitesseX = -6.7;
			this.accelerationX = 0.7;
			this.vitesseY = 0;
			this.accelerationY = 0;
			let music = new Audio("audio/attaque1.mp3");
			music.loop = false;
			music.play();
		}
		else if (chiffre == 2) {
			this.y = canvas.height - 25;
			this.refreshDelay = 33;
			this.scale = 0.45;
			this.vitesseX = 5.5;
			this.accelerationX = 0;
			this.vitesseY = -10;
			this.accelerationY = 0.46;
			let music = new Audio("audio/attaque2.mp3");
			music.loop = false;
			music.play();
		}
		else if (chiffre == 3) {
			this.y = canvas.height - 35;
			this.refreshDelay = 33;
			this.scale = 0.345;
			this.vitesseX = 2;
			this.accelerationX = 0;
			// this.vitesseY = -32;
			// this.accelerationY = 1.70;
			this.vitesseY = -3.2;
			this.accelerationY = 0.06;
			let music = new Audio("audio/attaque3.mp3");
			music.loop = false;
			music.play();
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

		if (this.x < canvas.width - 30 && this.y <= canvas.height) {
			alive = true;
		}

		return alive;
	}
}
