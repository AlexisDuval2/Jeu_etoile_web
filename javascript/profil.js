
let node = null

window.onload = () => {

	node = document.getElementById("stats-du-joueur");
	node.innerHTML = "<h1>Un instant s'il-vous-plaît...</h1>";

	let delai = 2200;
	setTimeout(traiter, delai);
}

const traiter = () => {

	fetch("ajaxProfil.php", {
		method: "POST",
		credentials: 'include'
	})
	.then(response => response.json())
	.then(data => {

		if (data=="EMPTY_KEY" || data=="USER_NOT_FOUND" || data=="USER_IS_BANNED" || data=="TOO_MANY_CALLS_BAN") {
			window.location.href = "logout.php";
		}
		else {
			node.innerHTML = "<h1>" + data.username + " - \"" + data.welcome_text + "\"</h1>";
			node.innerHTML += "<p> Type: " + data.type + " (niveau: " + data.level + ")</p>";
			node.innerHTML += "<p> HP: " + data.hp + "</p>";
			node.innerHTML += "<p> MP: " + data.mp + "</p>";
			node.innerHTML += "<p> EXP: " + data.exp + "/" + data.next_level_exp + "</p>";
			node.innerHTML += "<p> Victoires: " + data.victories + "</p>";
			node.innerHTML += "<p> Défaites: " + data.loss + "</p>";
			node.innerHTML += "<p> Points à dépenser: " + data.unspent_points;
			node.innerHTML += "<p> Pouvoirs à dépenser: " + data.unspent_skills + "</p>";
			node.innerHTML += "<p> Vitalité: " + data.char_vitality + "</p>";
			node.innerHTML += "<p> Énergie: " + data.char_energy + "</p>";
			node.innerHTML += "<p> Force: " + data.char_strength + "</p>";
			node.innerHTML += "<p> Agilité: " + data.char_agility + "</p>";

			let delai = 2200;
			setTimeout(traiter, delai);
		}
	})
}
