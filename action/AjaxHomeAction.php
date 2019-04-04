<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class AjaxHomeAction extends CommonAction {
		public $liste;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$liste = UserDAO::getAvailableGames($_SESSION["cleDeSession"]);
		}
	}
