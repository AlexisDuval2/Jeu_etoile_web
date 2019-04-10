<?php
	require_once("action/LobbyAction.php");

	$action = new LobbyAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<script src="javascript/lobby.js"></script>
	<canvas id="canvasLobby"></canvas>
	<h1>Bienvenue au Lobby!</h1>
	<div id="boite-de-niveaux"></div>
	<template id="template-des-niveaux">
		<h2 class="nom"></h2>
		<h2 class="valeur-du-niveau"></h2>
		<div class="nb-de-joueurs"></div>
		<div class="points-de-vie-du-boss"></div>
		<div class="type"></div>
	</template>

<?php
	require_once("partial/footer.php");
