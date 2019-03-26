<?php
	require_once("action/LogoutAction.php");

	$action = new LogoutAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<h1>Déconnexion</h1>

	<div class="logout-frame">
		[mettre du texte ici]
	</div>
<?php
	require_once("partial/footer.php");
