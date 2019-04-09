
window.onload = () => {
	let delai = 2200;
	setTimeout(traiter, delai);
}

// fonction pour appeler la page en utilisant Ajax
const traiter = () => {

	fetch("ajaxLobby.php", {
		method: "POST",
		credentials: 'include'
	})
	.then(response => response.json())
	.then(data => {

		document.getElementById("boite-de-niveaux").innerHTML = "";

		let niveauHTML = document.querySelector("#template-des-niveaux").innerHTML;

		data.forEach(niveau => {
			let node = document.createElement("div");
			node.setAttribute("class", "cadre-niveau");
			node.innerHTML = niveauHTML;
			node.querySelector(".nom").innerHTML = niveau.name;
			node.querySelector(".valeur-du-niveau").innerHTML = "Niveau: " + niveau.level;
			node.querySelector(".nb-de-joueurs").innerHTML = "Nombre de joueurs: " + niveau.nb + "/" + niveau.max_users;
			node.querySelector(".points-de-vie-du-boss").innerHTML = "HP du boss: " + niveau.current_hp + "/" + niveau.hp;
			node.querySelector(".type").innerHTML = "Type: " + niveau.type;

			document.getElementById("boite-de-niveaux").appendChild(node);
		});

		let delai = 2200;
		setTimeout(traiter, delai);
	})
}
