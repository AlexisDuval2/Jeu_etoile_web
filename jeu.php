<?php
	require_once("action/JeuAction.php");

	$action = new JeuAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<script src="javascript/jeu.js"></script>
	<canvas id="canvasJeu"></canvas>
	<h1>h1</h1>

<?php
	require_once("partial/footer.php");
