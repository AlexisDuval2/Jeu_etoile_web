<?php
	require_once("action/HomeAction.php");

	// phpx = créer la vue/frontend

	$action = new HomeAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<h1>Mon accueil perso</h1>

	<p>Bienvenue !</p>

<?php
	require_once("partial/footer.php");
