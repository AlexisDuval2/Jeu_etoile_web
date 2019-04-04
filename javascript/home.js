
window.onload = () => {

	// attendre 2 secondes

	// appeler la page en utilisant ajax

	// formdata c'est pour envoyer!

	// fetch c'est pour appeler la page

	fetch("ajax-devinette.php", {
		method: "POST",
		credentials: 'include', // Pour envoyer les cookies avec la requête!
	})
	.then(response => response.json())
	.then(data => { // résultat du echo, ajaxHome (données des parties)
		// afficher données
		// faire du dom pour afficher???
		document.querySelector(".sectionQuestion").innerHTML = data;
	})
}

//-----------------------------------------------------------------------

// UTILISER TEMPLATE POUR AFFICHAGE
// VOIR le dossier "_TEMPLATE JS"

//-----------------------------------------------------------------------

// -----------------------
// EXPLICATIONS DE FRED
// -----------------------
// Ce dont j'ai besoin
// (1) La vue:
// 	(a) home.php
// 	(b) homeAction.php
// (2) Informations de l'API (Ajax):
// 	(a) ajaxHome.php
// 	(b) ajaxHomeAction.php
// 	(c) home.js

// Exemple d'Ajax vu en classe:
// ajax-devinette.php // c'est comme une vue invisible, les infos apparaîssent là
// ajaxDevinetteAction.php // logique des données
// javascript.js // FormData etc???

//-----------------------------------------------------------------------
