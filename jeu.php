<?php
	require_once("action/JeuAction.php");
	$action = new JeuAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/TiledImage.js"></script>
	<script src="javascript/jeu/main.js"></script>
	<script src="javascript/jeu/Joueur.js"></script>
	<script src="javascript/jeu/AttaquesDuJoueur.js"></script>
	<script src="javascript/jeu/Allie.js"></script>
	<script src="javascript/jeu/Allies.js"></script>
	<script src="javascript/jeu/Boss.js"></script>
	<script src="javascript/jeu/AttaqueDuBoss.js"></script>
	<div id="menu-boss">
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
			<div id="bouton1">ATTENDRE</div>
			<div id="bouton2">ATTENDRE</div>
			<div id="bouton3">ATTENDRE</div>
		</div>
	</div>
	<div id="jeu-menu-bas">
		<div id="nom-joueur"></div>
		<div id="hp-joueur"></div>
		<div id="mp-joueur"></div>
	</div>
<?php
	require_once("partial/footer.php");
