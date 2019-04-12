<?php
	require_once("action/IndexAction.php");
	$action = new IndexAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/index.js"></script>
	<canvas id="canvasIndex"></canvas>
	<h1>Le jeu dont vous êtes l'étoile!</h1>
	<p>[Ceci est une page d'accueil]</p>
<?php
	require_once("partial/footer.php");
