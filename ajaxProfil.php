<?php
	require_once("action/AjaxProfilAction.php");
	$action = new AjaxProfilAction();
	$action->execute();
	echo json_encode($action->resultat);
