
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
		if (data=="GAME_NOT_FOUND_WIN" || data=="GAME_NOT_FOUND_LOST" || data=="GAME_NOT_FOUND_NONE") {
			window.location.href = "lobby.php";
		}
		else if (data=="EMPTY_KEY" || data=="USER_NOT_FOUND" ||  data=="TOO_MANY_CALLS_BAN") {
			window.location.href = "logout.php";
		}
		else {
			// game.name ( game.level )
			// game.hp / game.max_hp

			// afficher 3 boutons
			// afficher délai d'action...

			node = document.getElementById("nb-allies");
			node.innerHTML = "<p>";
			node.innerHTML += data.other_players.length + "/" + data.game.max_users;
			node.innerHTML += "</p>";

			// other_players[i].name
			// other_players[i].hp / other_players[i].max_hp
			// other_players[i].name
			// other_players[i].hp / other_players[i].max_hp
			// other_players[i].name
			// other_players[i].hp / other_players[i].max_hp
			// other_players[i].name
			// other_players[i].hp / other_players[i].max_hp

			// player.name
			// player.hp / player.max_hp
			// player.mp / player.max_mp

			// other_players[i].welcome_text // position absolute!
			// un sprite pour chaque allié...

			// animation si boss attaque:
			// 	game.attacked
		}
		let delai = 2200;
		setTimeout(traiter, delai);
	})
}
