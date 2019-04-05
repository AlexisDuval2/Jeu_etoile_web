<?php
	require_once("action/HomeAction.php");

	$action = new HomeAction();
	$action->execute();

	require_once("partial/header.php");
?>

	<script src="javascript/home.js"></script>
	<h1>Bienvenue au Lobby!</h1>
	<!-- <template id="liste-de-niveau">
		<div class="character">
			<h2></h2>
			<div class="type"></div>
			<div class="hp"></div>
		</div>
	</template> -->

<?php
	require_once("partial/footer.php");
