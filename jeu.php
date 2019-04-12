<?php
	require_once("action/JeuAction.php");
	$action = new JeuAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/jeu.js"></script>
	<div id="boss">
		<div id="infos-du-boss">Nom du boss (niveau)</div>
		<div id="hp-du-boss"></div>
	</div>
	<div id="jeu-menu-haut">
		<p></p>
	</div>
	<div id="jeu-milieu">
		<canvas id="canvasJeu"></canvas>
		<div id="menu-a-droite">
			<div class="attaque">attaque1</div>
			<div class="attaque">attaque2</div>
			<div class="attaque">attaque3</div>
		</div>
	</div>
	<div id="jeu-menu-bas"></div>
<?php
	require_once("partial/footer.php");
