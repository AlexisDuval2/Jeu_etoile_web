
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
	document.getElementById("boss").style.display = "none";

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

			document.getElementById("boss").style.display = "block";
			node = document.getElementById("infos-du-boss");
			node.innerHTML = "<p>";
			node.innerHTML += data.game.name + " (" + data.game.level +")";
			node.innerHTML += "</p>";

			let barrehpBoss = data.game.hp * 100 / data.game.max_hp;
			node = document.getElementById("hp-du-boss");
			node.style.width = barrehpBoss + "%";
			node.innerHTML = data.game.hp + "/" + data.game.max_hp;

			// afficher délai d'action...

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
				node.innerHTML += data.other_players[i].hp + "/" + data.other_players[i].max_hp;
				node.innerHTML += "</p>";
			}

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
