<?php
	require_once("action/LoginAction.php");
	$action = new LoginAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/index.js"></script>
	<script>
		let music = new Audio("audio\\login.mp3");
		music.loop = true;
		music.play();
	</script>
	<canvas id="canvasIndex"></canvas>
	<h1>Connexion</h1>
	<div class="login-form-frame">
		<form action="login.php" method="post">
			<?php
				if ($action->wrongLogin) {
					?>
					<div class="error-div">
						<strong>Erreur: </strong>
						<?= $action->cleDeSession; ?>
					</div>
					<?php
				}
			?>
			<div class="form-label">
				<label for="username">Nom d'usager : </label>
			</div>
			<div class="form-input">
				<input type="text" name="username" id="username" />
			</div>
			<div class="form-separator"></div>
			<div class="form-label">
				<label for="password">Mot de passe : </label>
			</div>
			<div class="form-input">
				<input type="password" name="pwd" id="password" />
			</div>
			<div class="form-separator"></div>
			<div class="form-label">&nbsp;</div>
			<div class="form-input">
				<button type="submit">Connexion</button>
			</div>
			<div class="form-separator"></div>
		</form>
	</div>
<?php
	require_once("partial/footer.php");
