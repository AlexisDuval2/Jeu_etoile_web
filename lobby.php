<?php
	require_once("action/LobbyAction.php");
	$action = new LobbyAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/TiledImage.js"></script>
	<script src="javascript/lobby.js"></script>
	<script>
		let music = new Audio("audio\\lobby.mp3");
		music.loop = true;
		music.play();
	</script>
	<h1>Bienvenue au Lobby!</h1>
	<div id="erreur-choix-partie"></div>
	<div id="boite-de-niveaux">
		<canvas id="canvasLobby"></canvas>
	</div>
	<template id="template-des-niveaux">
		<h2 class="nom"></h2>
		<h2 class="valeur-du-niveau"></h2>
		<div class="nb-de-joueurs"></div>
		<div class="points-de-vie-du-boss"></div>
		<div class="type"></div>
	</template>
<?php
	require_once("partial/footer.php");
