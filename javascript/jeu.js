
let canvas = null;
let ctx = null;
let imageEtoile = new Image();
let etoile = null;

window.onload = () => {
	document.querySelector(".container").style.animationName = "aucune";
	document.querySelector(".container").style.backgroundImage = "none";
	let delai = 2200;
	setTimeout(traiter, delai);
}

// fonction pour appeler la page en utilisant Ajax
const traiter = () => {
	fetch("ajaxJeu.php", {
		method: "POST",
		credentials: 'include'
	})
	.then(response => response.json())
	.then(data => {
		console.log(data);
		let delai = 2200;
		setTimeout(traiter, delai);
	})
}
