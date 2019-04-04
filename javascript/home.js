
//-----------------------------------------------------------------------

// liste de parties... le lobby
// il faut un design

//-----------------------------------------------------------------------

// AJAX
// VOIR le dossier "Lab - 07 - FRED - devinez le chiffre"
// window.onload = () => {

//-----------------------------------------------------------------------

// 	let formData = new FormData();
// 	formData.append('chiffre', document.querySelector("#reponse").value);
// 	fetch("ajax-devinette.php", {
// 		method: "POST",
// 		credentials: 'include', // Pour envoyer les cookies avec la requête!
// 		body: formData
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		document.querySelector(".sectionQuestion").innerHTML = data;
// 	})
// }

//-----------------------------------------------------------------------

// UTILISER TEMPLATE POUR AFFICHAGE
// VOIR le dossier "_TEMPLATE JS"

//-----------------------------------------------------------------------

// ======================================
//  L’affichage des parties disponibles
// ======================================
// > Accès aux parties
// > Les parties acessibles sont celles qui ont moins de 4 niveaux de différence
// par rapport au niveau de votre personnage
// 	Nom du service:
// 		list
// 	Paramètres:
// 		key
// 	Retour (succès):
// 		Un document JSON avec les parties disponibles
// 	Retour (erreur):
// 		"EMPTY_KEY"
// 		"USER_NOT_FOUND"
// 		"USER_IS_BANNED"
// 		"TOO_MANY_CALLS_BAN"

//-----------------------------------------------------------------------
