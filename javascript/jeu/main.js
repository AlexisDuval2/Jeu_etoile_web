
let canvas = null;
let ctx = null;
let tailleCadre = 350;
const tailleFinaleDuCadre = 675;
const delaiCadre = 12;
let joueur = null;
let attaquesDuJoueur = null;
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

	joueur = new Joueur();
	joueur.attendre(1);
	joueur.attendre(2);
	joueur.attendre(3);

	boss = new Boss();
	spriteList.push(joueur);
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
			let choixAttaque = joueur.action();
			if (joueur.enTrainDAttaquer) {spriteList.push(new AttaquesDuJoueur(choixAttaque))}

			boss.afficherInfos(data);
			if (data.game.attacked) {spriteList.push(new AttaqueDuBoss())}

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

			// un sprite pour chaque allié...

		}
		let delai = 2200;
		setTimeout(traiter, delai);
	})
}
