<?php
	require_once("action/ProfilAction.php");
	$action = new ProfilAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/profil.js"></script>
	<h1>Mon profil</h1>
	<div id="stats-du-joueur"></div>
<?php
	require_once("partial/footer.php");
