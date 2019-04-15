
let canvas = null;
let ctx = null;
let tailleCadre = 350;
const tailleFinaleDuCadre = 675;
const delaiCadre = 12;
let joueur = null;
let nbDAllies = 0
let boss = null;
let spriteList = [];
let i = 300;

window.onload = () => {
	document.querySelector(".container").style.animationName = "aucune";
	document.querySelector(".container").style.backgroundImage = "none";
	document.getElementById("menu-boss").style.display = "none";

	setTimeout(agrandirCadre, delaiCadre);

	canvas = document.getElementById("canvasJeu");
	ctx = canvas.getContext("2d");

	let delai = 2200;
	setTimeout(traiter, delai);

	joueur = new Joueur();
	joueur.attendre();
	spriteList.push(joueur);

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

			joueur.afficherInfos(data);
			joueur.action(spriteList);

			boss.afficherInfos(data);
			if (data.game.attacked) {
				spriteList.push(new AttaqueDuBoss())
			}

			node = document.getElementById("nb-allies");
			node.innerHTML = "<p>";
			node.innerHTML += "Nb d'alliés: " + data.other_players.length + "/" + data.game.max_users;
			node.innerHTML += "</p>";

			if (nbDAllies < data.other_players.length) {

				i = 300;
				setInterval(test2, 10);


				// let i = 300;
				// while (i > 0) {
				// 	if (i % 10 == 1) {
				// 		document.querySelector(".container").style.backgroundColor = "red";
				// 	}
				// 	else {
				// 		document.querySelector(".container").style.backgroundColor = "blue";
				// 	}
				// 	i--;
				// }
			}

			for (let i = 0; i < data.other_players.length; i++) {
				spriteList.push(new Allie(i + 1));
				const noAllie = i + 1;
				node = document.getElementById("allie" + noAllie);
				node.innerHTML = "<p>";
				node.innerHTML += data.other_players[i].name;
				node.innerHTML += "</p>";
				node.innerHTML += "<p>";
				node.innerHTML += "HP: " + data.other_players[i].hp + "/" + data.other_players[i].max_hp;
				node.innerHTML += "</p>";
			}
		}
		let delai = 2200;
		setTimeout(traiter, delai);

		nbDAllies = data.other_players.length;
	})
}

const test2 = () => {

	let temp = document.querySelector(".container");

	if (i == 0) {
		temp.style.backgroundColor = "black";
	} else {
		if (i % 2 == 0) {
			temp.style.backgroundColor = "red";
		}
		else {
			temp.style.backgroundColor = "blue";
		}
		i--;
	}
}
