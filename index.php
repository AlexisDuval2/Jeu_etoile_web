<?php
	require_once("action/IndexAction.php");

	$action = new IndexAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<h1>Le jeu dont vous êtes l'étoile!</h1>
	<p>Ceci est une page d'accueil</p>
	<canvas id="canvasHome"></canvas>

<?php
	require_once("partial/footer.php");
