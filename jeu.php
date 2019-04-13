<?php
	require_once("action/JeuAction.php");
	$action = new JeuAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/jeu.js"></script>
	<div id="boss">
		<div id="infos-du-boss"></div>
		<div id="marge-pr-hp-du-boss">
			<div id="hp-du-boss"></div>
		</div>
	</div>
	<div id="jeu-menu-haut">
		<div id="nb-allies"></div>
		<div id="allie1"></div>
		<div id="allie2"></div>
		<div id="allie3"></div>
		<div id="allie4"></div>
	</div>
	<div id="jeu-milieu">
		<canvas id="canvasJeu"></canvas>
		<div id="menu-a-droite">
			<div id="bouton1"></div>
			<div id="bouton2"></div>
			<div id="bouton3"></div>
		</div>
	</div>
	<div id="jeu-menu-bas"></div>
<?php
	require_once("partial/footer.php");
