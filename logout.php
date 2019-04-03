<?php
	require_once("action/LogoutAction.php");

	$action = new LogoutAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<h1>Déconnexion</h1>

	<div class="logout-frame">
		Merci, à la prochaine!
	</div>
	<canvas id="canvasLogout"></canvas>

<?php
	require_once("partial/footer.php");
