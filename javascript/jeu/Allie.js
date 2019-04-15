
class Allie {
	constructor() {
		this.x = 40;
		this.y = canvas.height - 200;
		this.columnCount = 20;
		this.rowCount = 1;
		this.refreshDelay = 33;
		this.loopColumns = true;
		this.scale = 1.0;
		this.sprite = new TiledImage("images/animationAllie.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
		this.sprite.changeRow(0);
		this.sprite.changeMinMaxInterval(0, 19);
		this.node = null;
		this.peutAttaquer = true;
		this.enTrainDAttaquer = false;
		this.noAttaque = 0;
	}

	tick() {
		ctx.clearRect(0, 0, 500, 300);
		sprite.tick(220, 120, ctx);
		window.requestAnimationFrame(tick);
	}

	afficherInfos(data) {
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

	action() {
		for (let i = 1; i <=3; i++) {
			this.node = document.getElementById("bouton" + i);
			this.node.onclick = () => {
				if (this.peutAttaquer) {
					if (i == 1) {
						this.noAttaque = 1;
						this.attaquer("Normal");
					}
					else if (i == 2) {
						this.noAttaque = 2;
						this.attaquer("Special1");
					}
					else if (i == 3) {
						this.noAttaque = 3;
						this.attaquer("Special2");
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
