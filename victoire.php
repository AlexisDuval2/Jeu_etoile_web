<?php
	require_once("action/VictoireAction.php");
	$action = new VictoireAction();
	$action->execute();
	require_once("partial/header.php");
?>
	<script src="javascript/logout.js"></script>
	<canvas id="canvasLogout"></canvas>
	<h1>La partie est terminée</h1>
	<div class="partie-terminee">
		VOUS AVEZ GAGNÉ!
	</div>
<?php
	require_once("partial/footer.php");
