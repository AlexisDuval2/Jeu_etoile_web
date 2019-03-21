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

			// -----------------------
			// logique pour se connecter
			// -----------------------

			if (isset($_POST["username"])) {

				$resultat = UserDAO::authenticate($_POST["username"], $_POST["pwd"]);

				if (strlen($resultat) == 40) {
					$_SESSION["username"] = $_POST["username"];
					$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
					header("location:home.php");
					exit();
				}
				else {
					$this->wrongLogin = true;
				}
			}
		}
	}

	// clé de session à conserver!
	// variable de session!

	// connexion erroné???
	// afficher le message de Fred!

	// faire une page de déconnexion!

	// liste de parties... le lobby
	// il faut un design
