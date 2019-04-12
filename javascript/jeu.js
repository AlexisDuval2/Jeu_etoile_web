
let canvas = null;
let ctx = null;
let imageEtoile = new Image();
let etoile = null;
let tailleCadre = 350;
const tailleFinaleDuCadre = 675;
const delaiCadre = 5;

window.onload = () => {
	document.querySelector(".container").style.animationName = "aucune";
	document.querySelector(".container").style.backgroundImage = "none";

	setTimeout(agrandirCadre, delaiCadre);

	let delai = 2200;
	setTimeout(traiter, delai);
}

const agrandirCadre = () => {
	tailleCadre += 5;
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
		if (data=="EMPTY_KEY" || data=="USER_NOT_FOUND" || data=="GAME_NOT_FOUND_WIN" || data=="GAME_NOT_FOUND_LOST" || data=="GAME_NOT_FOUND_NONE" || data=="TOO_MANY_CALLS_BAN") {
			window.location.href = "lobby.php";
		}
		else {

			node = document.getElementById("jeu-menu-haut");

			let tiret = "-";
			node.innerHTML = "<p>";
			node.innerHTML += data.game.attacked + tiret;
			node.innerHTML += data.game.hp + tiret;
			node.innerHTML += data.game.last_target + tiret;
			node.innerHTML += data.game.level + tiret;
			node.innerHTML += data.game.max_hp + tiret;
			node.innerHTML += data.game.max_users + tiret;
			node.innerHTML += data.game.name + tiret;
			node.innerHTML += data.game.type;
			node.innerHTML += "</p>";

			// game:
			// 	attacked: true
			// 	hp: 9218
			// 	last_target: "SimonAlpha"
			// 	level: "0"
			// 	max_hp: 10000
			// 	max_users: 4
			// 	name: "Void 1"
			// 	type: "Melee"

			// player:
			// 	hp: 28
			// 	level: 1
			// 	max_hp: 28
			// 	max_mp: 6
			// 	mp: 6
			// 	name: "Gribouillis"
			// 	skills: Array [ {…} ]
			// 	type: "Melee"
			// 	victories: 0

			// ​
			// other_players:
			// 	0:
			// 		attacked: "--"
			// 		hp: 25
			// 		level: "6"
			// 		max_hp: 25
			// 		max_mp: 15
			// 		mp: 15
			// 		name: "SimonAlpha"
			// 		type: "Melee"
			// 		victories: "33"
			// 		welcome_text: "Bien le bonjour"
		}
		let delai = 2200;
		setTimeout(traiter, delai);
	})
}
