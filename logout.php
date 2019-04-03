<?php
	require_once("action/LogoutAction.php");

	$action = new LogoutAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<h1>Déconnexion</h1>

	<div class="logout-frame">
		Merci et à la prochaine!
	</div>
	<canvas id="canvas" width="500" height="300"></canvas>

	<script>
		let canvas = null;
		let ctx = null;
		let spriteList = [];
		let bg = new Image();

		window.onload = () => {
			canvas = document.querySelector("#canvas");
			ctx = canvas.getContext("2d");

			bg.src = "images/landscape.png";

			tick();
		}

		const tick = () => {
			ctx.clearRect(0, 0, 650, 650);

			if (bg.complete) {
				ctx.drawImage(bg, 0, 0);
			}

			if (Math.random() < 0.2) {
				spriteList.push(new RainDrop());
			}

			for (let i = 0; i < spriteList.length; i++) {
				const sprite = spriteList[i];
				const alive = sprite.tick();
				if (!alive) {
					spriteList.splice(i, 1);
					i--;
				}
			}
			// *****************************************************************

			window.requestAnimationFrame(tick);
		}

		class RainDrop {
			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = -10;
				this.size = 2 + Math.random() * 5;
				this.speedY = this.size / 5;
			}

			const tick = () => {
				this.y += this.speedY;

				ctx.fillStyle = "blue";
				ctx.fillRect(this.x, this.y, this.size, this.size);

				return this.y < canvas.height / 2 ? true : false;
			}
		}
	</script>

<?php
	require_once("partial/footer.php");
