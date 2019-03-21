<?php
	class UserDAO {

		public static function authenticate($username, $password) {
			$data = [];
			$data["username"] = $username;
			$data["pwd"] = $password;

			return UserDAO::callAPI("signin", $data);
		}

		public static function getProfile($username) {
			$info = "";

			if ($username == "test") {
				$info = "test@test.com";
			}

			return $info;
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