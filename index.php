<?php
	require_once("action/IndexAction.php");
	$action = new IndexAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/index.js"></script>
	<script>
		let music = new Audio("audio\\index.mp3");
		music.loop = true;
		music.play();
	</script>
	<canvas id="canvasIndex"></canvas>
	<h1>Le jeu dont vous êtes l'étoile!</h1>
	<h3>Jeu par Alexis Duval</h3>
	<div>
		<p>420-B63-IN</p>
		<p>Programmation Web avancée</p>
		<p>Travail présenté à</p>
		<p>Frédéric Thériault</p>
		<p>Vous êtes une étoile et vous devez combattre un trou noir. Bonne chance!</p>
	</div>

<?php
	require_once("partial/footer.php");
