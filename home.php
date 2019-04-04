<?php
	require_once("action/HomeAction.php");

	$action = new HomeAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<script src="javascript/home.js"></script>
	<h1>Bienvenue au Lobby!</h1>
	<p>[infos ici]</p>

<?php
	require_once("partial/footer.php");
