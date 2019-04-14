
let canvas = null;
let ctx = null;
let tailleCadre = 350;
const tailleFinaleDuCadre = 675;
const delaiCadre = 12;
let boss = null;
let attaqueDuBoss = null;
let spriteList = [];

window.onload = () => {
	document.querySelector(".container").style.animationName = "aucune";
	document.querySelector(".container").style.backgroundImage = "none";
	document.getElementById("menu-boss").style.display = "none";

	setTimeout(agrandirCadre, delaiCadre);

	canvas = document.getElementById("canvasJeu");
	ctx = canvas.getContext("2d");

	let delai = 2200;
	setTimeout(traiter, delai);

	boss = new Boss();
	spriteList.push(boss);

	tick();
}

const agrandirCadre = () => {
	tailleCadre += 2;
	if (tailleCadre <= tailleFinaleDuCadre) {
		document.querySelector(".container").style.height = tailleCadre + "px";
		setTimeout(agrandirCadre, delaiCadre);
	}
}

const tick = () => {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < spriteList.length; i++) {
		const sprite = spriteList[i];
		const alive = sprite.tick(ctx);
		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}

	window.requestAnimationFrame(tick);
}

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
			if (data.game.attacked) {spriteList.push(new AttaqueDuBoss())};

			boss.afficherInfos(data);

			// afficher délai d'action...
			node = document.getElementById("bouton1");

			node.onclick = () => {
				console.log("bouton1");
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
