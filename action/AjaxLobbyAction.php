<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class AjaxLobbyAction extends CommonAction {

		public $resultat;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$this->resultat = UserDAO::obtenirPartiesDisponibles($_SESSION["cleDeSession"]);
		}
	}
