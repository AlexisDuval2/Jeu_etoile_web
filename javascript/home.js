
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
		console.log(data);
		traiter();
		// faire du dom pour afficher???
		// document.querySelector(".sectionQuestion").innerHTML = data;
		// UTILISER TEMPLATE POUR AFFICHAGE
		// VOIR le dossier "_TEMPLATE JS"
	})
}
