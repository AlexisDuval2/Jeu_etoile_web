<?php
	require_once("action/ProfilAction.php");
	$action = new ProfilAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/profil.js"></script>
	<script>
		let music = new Audio("audio\\profil.mp3");
		music.loop = true;
		music.play();
	</script>
	<h1>Mon profil</h1>
	<div id="stats-du-joueur"></div>
<?php
	require_once("partial/footer.php");
