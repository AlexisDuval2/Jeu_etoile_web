
//-----------------------------------------------------------------------

// AJAX
// VOIR le dossier "Lab - 07 - FRED - devinez le chiffre"
window.onload = () => {








	let formData = new FormData();
	formData.append('chiffre', document.querySelector("#reponse").value);

	fetch("ajax-devinette.php", {
		method: "POST",
		credentials: 'include', // Pour envoyer les cookies avec la requête!
		body: formData
	})
	.then(response => response.json())
	.then(data => {
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
