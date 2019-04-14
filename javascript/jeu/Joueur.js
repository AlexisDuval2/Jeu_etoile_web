
class Joueur {
	constructor() {
		this.x = 40;
		this.y = canvas.height - 30;
		this.columnCount = 10;
		this.rowCount = 1;
		this.refreshDelay = 700;
		this.loopColumns = true;
		this.scale = 0.42;
		this.sprite = new TiledImage("images/animationEtoileTourne.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, 2);
		this.node = null;
	}

	afficherInfos(data) {
		this.node = document.getElementById("nom-joueur");
		this.node.innerHTML = data.player.name + " ";
		this.node = document.getElementById("hp-joueur");
		this.node.innerHTML = "HP:" + data.player.hp + "/" + data.player.max_hp + " ";
		this.node = document.getElementById("mp-joueur");
		this.node.innerHTML = "MP:" + data.player.mp + "/" + data.player.max_mp + " ";
	}

	tick(ctx) {
		this.sprite.tick(this.x, this.y, ctx);
		return true;
	}
}
