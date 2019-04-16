<?php
	require_once("action/DefaiteAction.php");
	$action = new DefaiteAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/logout.js"></script>
	<script>
		let music = new Audio("audio\\defaite.mp3");
		music.loop = true;
		music.play();
	</script>
	<canvas id="canvasLogout"></canvas>
	<h1>La partie est terminée</h1>
	<div class="partie-terminee">
		VOUS AVEZ PERDU!
	</div>
<?php
	require_once("partial/footer.php");
