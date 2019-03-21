<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class LoginAction extends CommonAction{
		public $wrongLogin = false;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$this->wrongLogin = false;

			if (isset($_POST["username"])) {
				$pageVisibility = UserDAO::authenticate($_POST["username"], $_POST["pwd"]);

				if ($pageVisibility > CommonAction::$VISIBILITY_PUBLIC) {

					$_SESSION["username"] = $_POST["username"];
					$_SESSION["visibility"] = $pageVisibility;

					header("location:home.php");
					exit;
				}
				else {
					$this->wrongLogin = true;
				}
			}
		}
	}
