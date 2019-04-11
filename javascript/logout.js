
let canvas = null;
let ctx = null;
let spriteList = [];
let imageEtoile = new Image();

window.onload = () => {
	canvas = document.querySelector("#canvasLogout");
	ctx = canvas.getContext("2d");
	imageEtoile.src = "images/petite-etoile2.png";

	if (imageEtoile.complete) {
		tick();
	}
}

const tick = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (Math.random() < 0.4) {
		spriteList.push(new Etoile());
	}

	for (let i = 0; i < spriteList.length; i++) {
		const sprite = spriteList[i];
		const alive = sprite.tick();
		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}

	window.requestAnimationFrame(tick);
}

class Etoile {
	constructor() {
		this.x = Math.random() * canvas.width + 40;
		this.y = -10;
		this.nbAleatoire = Math.random() / 5;
		this.largeur = imageEtoile.naturalWidth * this.nbAleatoire + 4;
		this.hauteur = imageEtoile.naturalHeight * this.nbAleatoire + 4;
		this.vitesseX = this.largeur / 9.5;
		this.vitesseY = this.hauteur / 6.75;
	}

	tick() {
		this.x -= this.vitesseX;
		this.y += this.vitesseY;
		ctx.drawImage(imageEtoile, this.x, this.y, this.largeur, this.hauteur);
		return this.y < canvas.height ? true : false;
	}
}