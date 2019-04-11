<?php
	require_once("action/AjaxEntrerAction.php");

	$action = new AjaxEntrerAction();
	$action->execute();

	echo json_encode($action->result);
