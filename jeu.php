<?php
	require_once("action/JeuAction.php");
	$action = new JeuAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/jeu.js"></script>
	<div id="jeu-menu-haut">
		<p></p>
	</div>
	<div id="jeu-milieu">
		<canvas id="canvasJeu"></canvas>
		<div id="menu-a-droite"></div>
	</div>
	<div id="jeu-menu-bas"></div>
<?php
	require_once("partial/footer.php");
