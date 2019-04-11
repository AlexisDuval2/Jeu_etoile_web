<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class LoginAction extends CommonAction {

		public $wrongLogin = false;
		public $cleDeSession = "";

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			if (isset($_POST["username"])) {
				$this->cleDeSession = UserDAO::authenticate($_POST["username"], $_POST["pwd"]);
				if (strlen($this->cleDeSession) == 40) {
					$_SESSION["username"] = $_POST["username"];
					$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
					$_SESSION["cleDeSession"] = $this->cleDeSession;
					header("location:lobby.php");
					exit();
				}
				else {
					$this->wrongLogin = true;
				}
			}
		}
	}
