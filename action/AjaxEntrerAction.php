<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class AjaxEntrerAction extends CommonAction {
		public $resultat = false;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$this->resultat = UserDAO::entrerDansUnePartie($_SESSION["cleDeSession"], $_POST["idPartie"]);
		}
	}
