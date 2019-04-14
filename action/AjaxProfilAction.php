<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class AjaxProfilAction extends CommonAction {

		public $resultat;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$this->resultat = UserDAO::obtenirStatsJoueur($_SESSION["cleDeSession"]);
		}
	}
