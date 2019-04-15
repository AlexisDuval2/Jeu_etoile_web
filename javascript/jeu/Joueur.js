
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
		this.peutAttaquer = true;
		this.enTrainDAttaquer = false;
		this.noAttaque = 0;
	}

	afficherInfos(data) {
		this.node = document.getElementById("nom-joueur");
		this.node.innerHTML = data.player.name + " ";
		this.node = document.getElementById("hp-joueur");
		this.node.innerHTML = "HP:" + data.player.hp + "/" + data.player.max_hp + " ";
		this.node = document.getElementById("mp-joueur");
		this.node.innerHTML = "MP:" + data.player.mp + "/" + data.player.max_mp + " ";
	}

	attaquer(nomAttaque, spriteList) {
		this.enTrainDAttaquer = true;
		let formData = new FormData();
		formData.append("nomAttaque", nomAttaque);

		fetch("ajaxAttaquer.php", {
			method: "POST",
			credentials: "include",
			body: formData
		})
		.then(response => response.json())
		.then(data => {

			this.peutAttaquer = false;

			// FAIRE UNE ANIMATION CSS DE 2200 ms
			for (let i = 1; i <= 3; i++) {
				this.node = document.getElementById("bouton" + i);
				this.node.innerHTML = "ATTENDRE";
			}

			let chiffre = 0;
			if (nomAttaque == "Normal") {chiffre = 1;}
			else if (nomAttaque == "Special1") {chiffre = 2;}
			else if (nomAttaque == "Special2") {chiffre = 3;}
			this.node = document.getElementById("bouton" + chiffre);
			if (data == "OK") {
				this.node.innerHTML = data;
				spriteList.push(new AttaquesDuJoueur(chiffre))
			}
			else {
				this.node.innerHTML = "N/A";
			}
		})
	}

	attendre() {
		let delai = 2200;
		setTimeout(()=>{
			this.peutAttaquer = true;
			this.enTrainDAttaquer = false;
			for (let i = 1; i <= 3; i++) {
				this.node = document.getElementById("bouton" + i);
				this.node.innerHTML = "bouton" + i;
			}
		}, delai);
	}

	action(spriteList) {
		for (let i = 1; i <=3; i++) {
			this.node = document.getElementById("bouton" + i);
			this.node.onclick = () => {
				if (this.peutAttaquer) {
					if (i == 1) {
						this.noAttaque = 1;
						this.attaquer("Normal", spriteList);
					}
					else if (i == 2) {
						this.noAttaque = 2;
						this.attaquer("Special1", spriteList);
					}
					else if (i == 3) {
						this.noAttaque = 3;
						this.attaquer("Special2", spriteList);
					}
					this.attendre();
				}
			}
		}
	}

	tick(ctx) {
		this.sprite.tick(this.x, this.y, ctx);
		return true;
	}
}
