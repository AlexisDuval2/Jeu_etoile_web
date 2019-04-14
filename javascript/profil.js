
let node = null

window.onload = () => {

	node = document.getElementById("stats-du-joueur");
	node.innerHTML = "Un instant s'il-vous-plaît...";

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

			console.log(data);

			node.innerHTML = "<p>" + data.username + "</p>";
			node.innerHTML += "<p>" + data.welcome_text + "</p>";
			node.innerHTML += "<p>" + data.type + data.level + "</p>";
			node.innerHTML += "<p>" + data.hp + data.mp + data.exp + "</p>";
			node.innerHTML += "<p>" + data.victories + data.loss + "</p>";
			node.innerHTML += "<p>" + data.next_level_exp + "</p>";
			node.innerHTML += "<p>" + data.unspent_points + data.unspent_skills + "</p>";
			node.innerHTML += "<p>" + data.char_vitality + "</p>";
			node.innerHTML += "<p>" + data.char_energy + "</p>";
			node.innerHTML += "<p>" + data.char_agility + "</p>";
			node.innerHTML += "<p>" + data.char_strength + "</p>";

			let delai = 2200;
			setTimeout(traiter, delai);
		}
	})
}
