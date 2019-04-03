<?php
	require_once("action/ProfileAction.php");

	$action = new ProfileAction();
	$action->execute();

	require_once("partial/header.php");
?>
	<h1>Mon profil</h1>

	<p>[détails du profil]</p>


<?php
	require_once("partial/footer.php");
