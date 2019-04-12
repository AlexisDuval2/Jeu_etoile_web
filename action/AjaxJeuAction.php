<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class AjaxJeuAction extends CommonAction {

		public $resultat;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$this->resultat = UserDAO::obtenirEtatDeLaPartie($_SESSION["cleDeSession"]);
		}
	}
