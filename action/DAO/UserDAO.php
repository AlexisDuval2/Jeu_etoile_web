<?php
	class UserDAO {

		public static function authenticate($username, $password) {
			$data = [];
			$data["username"] = $username;
			$data["pwd"] = $password;
			return UserDAO::callAPI("signin", $data);
		}

		public static function logout($cleDeSession) {
			$data = [];
			$data["key"] = $cleDeSession;
			return UserDAO::callAPI("signout", $data);
		}

		public static function obtenirStatsJoueur($cleDeSession) {
			$data = [];
			$data["key"] = $cleDeSession;
			return UserDAO::callAPI("user-info", $data);
		}

		public static function obtenirPartiesDisponibles($cleDeSession) {
			$data = [];
			$data["key"] = $cleDeSession;
			return UserDAO::callAPI("list", $data);
		}

		public static function entrerDansUnePartie($cleDeSession, $idPartie) {
			$data = [];
			$data["key"] = $cleDeSession;
			$data["id"] = $idPartie;
			return UserDAO::callAPI("enter", $data);
		}

		public static function obtenirEtatDeLaPartie($cleDeSession) {
			$data = [];
			$data["key"] = $cleDeSession;
			return UserDAO::callAPI("state", $data);
		}

		public static function attaquer($cleDeSession, $nomAttaque) {
			$data = [];
			$data["key"] = $cleDeSession;
			$data["skill-name"] = $nomAttaque;
			return UserDAO::callAPI("action", $data);
		}

		public static function callAPI($service, array $data) {
			$apiURL = "https://apps-de-cours.com/web-sirius/server/api/" . $service . ".php";
			$options = array(
				'http' => array(
					'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
					'method'  => 'POST',
					'content' => http_build_query($data)
				)
			);
			$context  = stream_context_create($options);
			$result = file_get_contents($apiURL, false, $context);
			if (strpos($result, "<br") !== false) {
				var_dump($result);
				exit;
			}
			return json_decode($result);
		}
	}