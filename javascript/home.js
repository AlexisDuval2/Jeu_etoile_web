
window.onload = () => {
	traiter();
}

// fonction qui traite les données
const traiter = () => {
	let delai = 2200;
	setTimeout(function(){appelerLaPage();}, delai);
}

// fonction pour appeler la page en utilisant Ajax
const appelerLaPage = () => {

	fetch("ajaxHome.php", {
		method: "POST",
		credentials: 'include'
	})
	.then(response => response.json())
	.then(data => {

		// data.forEach(element => {
		// 	console.log(element.name);
		// });

		// console.log(data);

		data.forEach(niveau => {
			console.log("----------------------------");
			console.log("Nom du niveau: " + niveau.name);
			console.log("<niveau " + niveau.level + ">");
			console.log("Nombre de joueurs: " + niveau.nb + "/" + niveau.max_users);
			console.log("Points de vie du boss: " + niveau.current_hp + "/" + niveau.hp);
			console.log("Type: " + niveau.type);
		});

		// traiter();

		// faire du dom pour afficher???
		// document.querySelector(".sectionQuestion").innerHTML = data;
		// UTILISER TEMPLATE POUR AFFICHAGE
		// VOIR le dossier "_TEMPLATE JS"
	})
}
