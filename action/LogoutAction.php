<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class LogoutAction extends CommonAction {

		public $result;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {

			$this->pagePublique = CommonAction::$VISIBILITY_PUBLIC;

			if ($_SESSION["visibility"] != $this->pagePublique) {
				$this->result = UserDAO::logout($_SESSION["cleDeSession"]);
				session_unset();
				session_destroy();
				session_start();
				$_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
			}
		}
	}
