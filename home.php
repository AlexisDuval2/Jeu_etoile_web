<?php
	require_once("action/HomeAction.php");

	$action = new HomeAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<script src="javascript/home.js"></script>
	<h1>Bienvenue au Lobby!</h1>
	<template id="template-des-niveaux">
		<div class="cadre-niveau">
			<h2 class="nom"></h2>
			<div class="valeur-du-niveau"></div>
			<div class="nb-de-joueurs"></div>
			<div class="points-de-vie-du-boss"></div>
			<div class="type"></div>
		</div>
	</template>

<?php
	require_once("partial/footer.php");
