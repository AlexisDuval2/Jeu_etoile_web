<?php
	require_once("action/AjaxJeuAction.php");
	$action = new AjaxJeuAction();
	$action->execute();
	echo json_encode($action->resultat);
