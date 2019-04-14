
class Joueur {
	constructor() {
		this.x = 40;
		this.y = canvas.height - 30;
		this.columnCount = 10;
		this.rowCount = 1;
		this.refreshDelay = 700;
		this.loopColumns = true;
		this.scale = 0.4;
		this.sprite = new TiledImage("images/animationEtoileTourne.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, 2);
		this.node = null;
		this.attaque = ["Normal", "Special1", "Special2"];
		this.peutAttaquer = true;
	}

	afficherInfos(data) {
		this.node = document.getElementById("nom-joueur");
		this.node.innerHTML = data.player.name + " ";
		this.node = document.getElementById("hp-joueur");
		this.node.innerHTML = "HP:" + data.player.hp + "/" + data.player.max_hp + " ";
		this.node = document.getElementById("mp-joueur");
		this.node.innerHTML = "MP:" + data.player.mp + "/" + data.player.max_mp + " ";
	}

	attaquer(chiffre) {
		let formData = new FormData();
		formData.append("nomAttaque", this.attaque[chiffre - 1]);

		fetch("ajaxAttaquer.php", {
			method: "POST",
			credentials: "include",
			body: formData
		})
		.then(response => response.json())
		.then(data => {

			this.peutAttaquer = false;

			this.node = document.getElementById("bouton" + chiffre);
			this.node.innerHTML = "ATTENDRE"; // FAIRE UNE ANIMATION CSS DE 2200 ms

			console.log(data);

			// if (data == "GAME_ENTERED") {
			// 	window.location.href = "jeu.php";
			// }

			// "EMPTY_KEY"
			// "USER_NOT_FOUND"
			// "GAME_NOT_FOUND"
			// "TOO_MANY_CALLS_BAN"
			// "EMPTY_SKILL_NAME"
			// "SKILL_NOT_FOUND"
			// "PLAYER_IS_DEAD"
			// "NOT_ENOUGH_MP"
		})
	}

	attendre(chiffre) {
		let delai = 2200;
		setTimeout(()=>{
			this.peutAttaquer = true;
			this.node = document.getElementById("bouton" + chiffre);
			this.node.innerHTML = "bouton" + chiffre;
		}, delai);
	}

	tick(ctx) {
		this.sprite.tick(this.x, this.y, ctx);
		return true;
	}
}
