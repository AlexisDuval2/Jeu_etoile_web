
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
	ctx.clearRect(0, 0, 900, 700);
	etoile.tick();
	window.requestAnimationFrame(tick);
}

class Etoile {
	constructor() {
		this.x = canvas.width / 2;
		this.y = 1;
		this.largeur = 22;
		this.hauteur = 12;
		this.vitesseX = 0.5;
		this.vitesseY = 0.4;
	}

	tick() {
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

		if (Math.random() < 0.5) {
			this.vitesseX += Math.random();
		}
		if (Math.random() < 0.1) {
			this.vitesseY += Math.random();
		}

		this.x += this.vitesseX;
		this.y += this.vitesseY;

		ctx.drawImage(imageEtoile, this.x, this.y, this.largeur, this.hauteur);
	}
}