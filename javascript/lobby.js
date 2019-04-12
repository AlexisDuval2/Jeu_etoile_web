
let canvas = null;
let ctx = null;
let imageEtoile = new Image();
let etoile = null;

window.onload = () => {
	let delai = 2200;
	setTimeout(traiter, delai);
	// canvas = document.querySelector("#canvasIndex");
	// ctx = canvas.getContext("2d");
	// imageEtoile.src = "images/etoileAccueil.png";
	// etoile = new Etoile();
	// tick();
}

const traiter = () => {

	document.getElementById("canvasLobby").style.width = "0";
	document.getElementById("canvasLobby").style.height = "0";

	fetch("ajaxLobby.php", {
		method: "POST",
		credentials: 'include'
	})
	.then(response => response.json())
	.then(data => {

		if (data == "EMPTY_KEY" || data == "USER_NOT_FOUND" || data == "USER_IS_BANNED" || data == "TOO_MANY_CALLS_BAN") {
			window.location.href = "logout.php";
		}
		else {
			document.getElementById("boite-de-niveaux").innerHTML = "";

			let niveauHTML = document.querySelector("#template-des-niveaux").innerHTML;

			data.forEach(niveau => {
				node = document.createElement("div");
				node.setAttribute("class", "cadre-niveau");
				node.innerHTML = niveauHTML;
				node.querySelector(".nom").innerHTML = niveau.name;
				node.querySelector(".valeur-du-niveau").innerHTML = "Niveau: " + niveau.level;
				node.querySelector(".nb-de-joueurs").innerHTML = "Nombre de joueurs: " + niveau.nb + "/" + niveau.max_users;
				node.querySelector(".points-de-vie-du-boss").innerHTML = "HP du boss: " + niveau.current_hp + "/" + niveau.hp;
				node.querySelector(".type").innerHTML = "Type: " + niveau.type;
				document.getElementById("boite-de-niveaux").appendChild(node);

				node.onclick = () => {

					let formData = new FormData();
					formData.append("idPartie", niveau.id);

					fetch("ajaxEntrer.php", {
						method: "POST",
						credentials: "include",
						body: formData
					})
					.then(response => response.json())
					.then(data => {
						if (data == "GAME_ENTERED") {
							window.location.href = "jeu.php";
						}
						else {
							node = document.getElementById("erreur-choix-partie");
							node.setAttribute("class", "error-div");
							node.style.fontWeight = "bold";
							node.innerHTML = "Erreur: " + data;
						}
					})
				}
			});

			let delai = 2200;
			setTimeout(traiter, delai);
		}
	})
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
		this.longueur = 117;
		this.positions = [];
	}

	conserverDernierePosition(xPos, yPos) {
		this.positions.push({
			x: xPos,
			y: yPos
		});
		if (this.positions.length > this.longueur) {
			this.positions.shift();
		}
	}

	tick() {

		this.conserverDernierePosition(this.x, this.y);

		if (this.x > 0) { this.vitesseX *= -1; }
		if (this.x < canvas.width - this.largeur) { this.vitesseX *= -1; }
		if (this.y > 0) { this.vitesseY *= -1; }
		if (this.y < canvas.height - this.hauteur) { this.vitesseY *= -1; }

		this.x += this.vitesseX;
		this.y += this.vitesseY;

		for (let i = 0; i < this.positions.length; i++) {
			let x = Math.pow(this.positions[i].x, 2) * 0.0035;
			let y = Math.pow(this.positions[i].y, 2) * 0.0072;
			ctx.drawImage(imageEtoile, x, y, i * 0.15, i * 0.08);
		}
	}
}