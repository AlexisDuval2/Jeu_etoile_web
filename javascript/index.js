
let canvas = null;
let ctx = null;
let imageEtoile = new Image();
let etoile = null;
let timer = null;

window.onload = () => {
	canvas = document.querySelector("#canvasIndex");
	ctx = canvas.getContext("2d");
	imageEtoile.src = "images/etoileAccueil.png";
	etoile = new Etoile();
	timer = 0;

	tick();
}

const tick = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	etoile.tick();
	window.requestAnimationFrame(tick);
}

class Etoile {
	constructor() {
		this.x = canvas.width / 2;
		this.y = 1;
		this.largeur = 17;
		this.hauteur = 9;
		this.vitesseX = 3;
		this.vitesseY = 2;
		this.motionTrailLength = 117;
		this.positions = [];
	}

	storeLastPosition(xPos, yPos) {
		// push an item
		this.positions.push({
			x: xPos,
			y: yPos
		});

		//get rid of first item
		if (this.positions.length > this.motionTrailLength) {
			this.positions.shift();
		}
	}

	tick() {

		this.storeLastPosition(this.x, this.y);

		if (this.x > 0) {
			this.vitesseX *= -1;
		}
		if (this.x < canvas.width - this.largeur) {
			this.vitesseX *= -1;
		}
		if (this.y > 0) {
			this.vitesseY *= -1;
		}
		if (this.y < canvas.height - this.hauteur) {
			this.vitesseY *= -1;
		}

		this.x += this.vitesseX;
		this.y += this.vitesseY;

		for (let i = 0; i < this.positions.length; i++) {
			let x = Math.pow(this.positions[i].x, 2) * 0.0035;
			let y = Math.pow(this.positions[i].y, 2) * 0.0072;
			ctx.drawImage(imageEtoile, x, y, i*0.15, i*0.08);
		}
	}
}