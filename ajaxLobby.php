<?php
	require_once("action/AjaxLobbyAction.php");

	$action = new AjaxLobbyAction();
	$action->execute();

	echo json_encode($action->result);
