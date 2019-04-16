<?php
	require_once("action/LogoutAction.php");
	$action = new LogoutAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/logout.js"></script>
	<script>
		let music = new Audio("audio\\logout.mp3");
		music.loop = true;
		music.play();
	</script>
	<canvas id="canvasLogout"></canvas>
	<h1>Déconnexion</h1>
	<div class="logout-frame">
		Merci, à la prochaine!
	</div>
<?php
	require_once("partial/footer.php");
