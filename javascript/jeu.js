
let canvas = null;
let ctx = null;
let tailleCadre = 350;
const tailleFinaleDuCadre = 675;
const delaiCadre = 12;

window.onload = () => {
	document.querySelector(".container").style.animationName = "aucune";
	document.querySelector(".container").style.backgroundImage = "none";
	document.getElementById("boss").style.display = "none";

	setTimeout(agrandirCadre, delaiCadre);

	canvas = document.getElementById("canvasJeu");
	ctx = canvas.getContext("2d");

	let delai = 2200;
	setTimeout(traiter, delai);
}

const agrandirCadre = () => {
	tailleCadre += 2;
	if (tailleCadre <= tailleFinaleDuCadre) {
		document.querySelector(".container").style.height = tailleCadre + "px";
		setTimeout(agrandirCadre, delaiCadre);
	}
}

// fonction pour appeler la page en utilisant Ajax
const traiter = () => {
	fetch("ajaxJeu.php", {
		method: "POST",
		credentials: 'include'
	})
	.then(response => response.json())
	.then(data => {
		if (data=="GAME_NOT_FOUND_WIN") {
			window.location.href = "victoire.php";
		}
		else if (data=="GAME_NOT_FOUND_LOST") {
			window.location.href = "defaite.php";
		}
		else if (data=="GAME_NOT_FOUND_NONE") {
			window.location.href = "lobby.php";
		}
		else if (data=="EMPTY_KEY" || data=="USER_NOT_FOUND" ||  data=="TOO_MANY_CALLS_BAN") {
			window.location.href = "logout.php";
		}
		else {
			if (data.game.attacked) {

				let x = 225;
				let y = 125;
				let vitesseX = 1.35;

				let columnCount = 28;
				let rowCount = 1;
				let refreshDelay = 65; // msec
				let loopColumns = true;
				let scale = 1;
				let sprite = new TiledImage("images/leBossAttaque.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
				sprite.changeRow(0); // One row per animation
				sprite.changeMinMaxInterval(0, 27); // Loop from which column to which column?

				tick();

				function tick() {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					x -= vitesseX;
					sprite.tick(x, y, ctx);
					window.requestAnimationFrame(tick);
				}
			}
			else {
				let sprite = new TiledImage("images/leBossAttaque.png", 0, 0, 10000, false, 1.0, null);
				sprite.changeRow(0); // One row per animation
				sprite.changeMinMaxInterval(0, 13); // Loop from which column to which column?

				tick();

				function tick() {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					sprite.tick(145, 75, ctx);
					window.requestAnimationFrame(tick);
				}
			}

			document.getElementById("boss").style.display = "block";
			node = document.getElementById("infos-du-boss");
			node.innerHTML = "<p>";
			node.innerHTML += "Nom de la partie: " + data.game.name + " (" + data.game.level +")";
			node.innerHTML += "</p>";

			let barrehpBoss = data.game.hp * 100 / data.game.max_hp;
			node = document.getElementById("hp-du-boss");
			node.style.width = barrehpBoss + "%";
			node.innerHTML = data.game.hp + "/" + data.game.max_hp;

			// afficher délai d'action...
			node = document.getElementById("bouton1");

			node.onclick = () => {
				alert("test");
			}

			node = document.getElementById("nb-allies");
			node.innerHTML = "<p>";
			node.innerHTML += "Nb d'alliés: " + data.other_players.length + "/" + data.game.max_users;
			node.innerHTML += "</p>";

			for (let i = 0; i < data.other_players.length; i++) {
				const noAllie = i + 1;
				node = document.getElementById("allie" + noAllie);
				node.innerHTML = "<p>";
				node.innerHTML += data.other_players[i].name;
				node.innerHTML += "</p>";
				node.innerHTML += "<p>";
				node.innerHTML += "HP: " + data.other_players[i].hp + "/" + data.other_players[i].max_hp;
				node.innerHTML += "</p>";
			}

			node = document.getElementById("nom-joueur");
			node.innerHTML = data.player.name + " ";
			node = document.getElementById("hp-joueur");
			node.innerHTML = "HP:" + data.player.hp + "/" + data.player.max_hp + " ";
			node = document.getElementById("mp-joueur");
			node.innerHTML = "MP:" + data.player.mp + "/" + data.player.max_mp + " ";

			// un sprite pour chaque allié...

		}
		let delai = 2200;
		setTimeout(traiter, delai);
	})
}
