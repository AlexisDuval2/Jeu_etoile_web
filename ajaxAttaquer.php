<?php
	require_once("action/AjaxAttaquerAction.php");
	$action = new AjaxAttaquerAction();
	$action->execute();
	echo json_encode($action->resultat);
