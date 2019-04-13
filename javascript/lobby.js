
let canvas = null;
let ctx = null;

window.onload = () => {

	document.querySelector(".container").style.animationName = "aucune";
	document.querySelector(".container").style.backgroundImage = "none";

	animer();

	let delai = 2200;
	setTimeout(traiter, delai);
}

const animer = () => {
	let columnCount = 10;
	let rowCount = 1;
	let refreshDelay = 40; // msec
	let loopColumns = true; // or by row?
	let scale = 0.5;
	let sprite = new TiledImage("images/animationEtoileTourne.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
	sprite.changeRow(0); // One row per animation
	sprite.changeMinMaxInterval(0, 9); // Loop from which column to which column?

	canvas = document.getElementById("canvasLobby");
	ctx = canvas.getContext("2d");

	tick();

	function tick() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		sprite.tick(145, 75, ctx);
		window.requestAnimationFrame(tick);
	}
}

const traiter = () => {

	if (document.getElementById("canvasLobby") != null) {
		document.getElementById("canvasLobby").style.width = "0";
		document.getElementById("canvasLobby").style.height = "0";
	}
	document.querySelector(".container").style.backgroundImage = "images/petite-etoile.png";
	document.querySelector(".container").style.animationName = "flashEtoile";

	fetch("ajaxLobby.php", {
		method: "POST",
		credentials: 'include'
	})
	.then(response => response.json())
	.then(data => {

		if (data=="EMPTY_KEY" || data=="USER_NOT_FOUND" || data=="USER_IS_BANNED" || data=="TOO_MANY_CALLS_BAN") {
			window.location.href = "logout.php";
		}
		else {
			document.getElementById("boite-de-niveaux").innerHTML = "";

			let niveauHTML = document.querySelector("#template-des-niveaux").innerHTML;

			data.forEach(niveau => {
				node = document.createElement("div");
				node.setAttribute("class", "cadre-niveau");
				node.innerHTML = niveauHTML;
				node.querySelector(".nom").innerHTML = niveau.name;
				node.querySelector(".valeur-du-niveau").innerHTML = "Niveau: " + niveau.level;
				node.querySelector(".nb-de-joueurs").innerHTML = "Nombre de joueurs: " + niveau.nb + "/" + niveau.max_users;
				node.querySelector(".points-de-vie-du-boss").innerHTML = "HP du boss: " + niveau.current_hp + "/" + niveau.hp;
				node.querySelector(".type").innerHTML = "Type: " + niveau.type;
				document.getElementById("boite-de-niveaux").appendChild(node);

				node.onclick = () => {

					let formData = new FormData();
					formData.append("idPartie", niveau.id);

					fetch("ajaxEntrer.php", {
						method: "POST",
						credentials: "include",
						body: formData
					})
					.then(response => response.json())
					.then(data => {
						if (data == "GAME_ENTERED") {
							window.location.href = "jeu.php";
						}
						else {
							node = document.getElementById("erreur-choix-partie");
							node.setAttribute("class", "error-div");
							node.style.fontWeight = "bold";
							node.innerHTML = "Erreur: " + data;
						}
					})
				}
			});

			let delai = 2200;
			setTimeout(traiter, delai);
		}
	})
}
