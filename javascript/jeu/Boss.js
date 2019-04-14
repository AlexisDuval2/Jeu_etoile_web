
class Boss {
	constructor() {
		this.x = canvas.width - 50;
		this.y = canvas.height - 25;
		this.columnCount = 28;
		this.rowCount = 1;
		this.refreshDelay = 65;
		this.loopColumns = true;
		this.scale = 1;
		this.sprite = new TiledImage("images/leBossAttaque.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, 27);
		this.node = null;
	}

	afficherInfos(data) {
		document.getElementById("menu-boss").style.display = "block";
		this.node = document.getElementById("infos-du-boss");
		this.node.innerHTML = "<p>";
		this.node.innerHTML += "Nom de la partie: " + data.game.name + " (" + data.game.level +")";
		this.node.innerHTML += "</p>";

		let barrehpBoss = data.game.hp * 100 / data.game.max_hp;
		this.node = document.getElementById("hp-du-boss");
		this.node.style.width = barrehpBoss + "%";
		this.node.innerHTML = data.game.hp + "/" + data.game.max_hp;
	}

	tick(ctx) {
		this.sprite.tick(this.x, this.y, ctx);
		return true;
	}
}
