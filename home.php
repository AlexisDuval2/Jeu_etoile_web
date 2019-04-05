<?php
	require_once("action/HomeAction.php");

	$action = new HomeAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<script src="javascript/home.js"></script>
	<h1>Bienvenue au Lobby!</h1>
	<div id="boite-de-niveaux"></div>
	<template id="template-des-niveaux">
		<div class="cadre-niveau">
			<h2 class="nom"></h2>
			<h2 class="valeur-du-niveau"></h2>
			<div class="nb-de-joueurs"></div>
			<div class="points-de-vie-du-boss"></div>
			<div class="type"></div>
		</div>
	</template>

<?php
	require_once("partial/footer.php");
