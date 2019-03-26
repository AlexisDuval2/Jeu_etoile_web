<?php
	require_once("action/CommonAction.php");

	class LogoutAction extends CommonAction {
		public $wrongLogin = false;
		public $cleDeSession = "";

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			session_unset();
			session_destroy();
			session_start();
			$_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
		}
	}
