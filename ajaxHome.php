<?php
	require_once("action/AjaxHomeAction.php");

	$action = new AjaxHomeAction();
	$action->execute();

	echo json_encode($action->result);
